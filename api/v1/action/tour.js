const { checkToken } = require('../../../middleware');
const { getDatabaseModels } = require('../../../core/database');
const { createCharge, createAccount } = require('../../../helpers/stripe');

module.exports = router => {
  router.get('/', async (req, res) => {
    const charge = await createAccount('Test', 'taxisoopya@hotmail.fr');
    res.customJson(charge);
  });

  router.post('/', checkToken, async (req, res) => {
    logger.debug(`New payment tour !`);
    const { id } = req.body;
    const db = getDatabaseModels('appointrip');

    try {
      const actionTour = await db.tbl_action_payment_tour.findOne({ id });
      if (!actionTour) {
        throw 'This id does not found from database';
      }

      const user = await db.users.findOne({ userID: actionTour.id_user });
      if (!user) {
        throw 'This user does not found from database';
      }

      const tour = await db.tours.findOne({ tourID: actionTour.id_tour });
      if (!tour) {
        throw 'This tour does not found from database';
      }

      const booking = await db.tbl_booking.findOne({ id_booking: actionTour.id_booking });
      if (!booking) {
        throw 'This booking does not found from database';
      }

      res.customJson('ok');
    } catch (err) {
      actionTour.statut = 5;
      actionTour.body_receive = err.message;
      actionTour.save();
      return res.customJson({}, 400, err.message);
    }
  });
  return router;
};
