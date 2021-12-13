/**
 * Created by Wavicle
 */

 var express = require('express');
 var mainController = require('../controllers/MainController');
 var router = express.Router();
 var app = require('../../../ApplicationInstance');
 
 //===============================================================
 //================== NORMAL GET REQUEST ROUTER ========================
 //===============================================================
 
 // Error Handlers
 router.route('/404').get(mainController.error_404);
 router.route('/500').get(mainController.error_500);
 
 // LimeChat Home
 router.route('/').get(mainController.home);
 router.route('/demos').get(mainController.demos);
 
 // Demo Pages
 router.route('/superbottoms').get(mainController.superbottoms);
 router.route('/kaya').get(mainController.kaya);
 router.route('/sugar').get(mainController.sugar);
 router.route('/azah').get(mainController.azah);
 router.route('/sirona').get(mainController.sirona);
 router.route('/flintobox').get(mainController.flintobox);
 router.route('/manmatters').get(mainController.manmatters);
 router.route('/bewakoof').get(mainController.bewakoof);
 router.route('/caratlane').get(mainController.caratlane);
 router.route('/bodywise').get(mainController.bodywise);
 router.route('/anveshan').get(mainController.anveshan);
 router.route('/kapiva').get(mainController.kapiva);
 router.route('/churchillshoes').get(mainController.churchillshoes);
 router.route('/herbobuild').get(mainController.herbobuild);
 router.route('/bellavita').get(mainController.bellavita);
 router.route('/aadar').get(mainController.aadar);
 router.route('/themancompany').get(mainController.themancompany);
 router.route('/giva').get(mainController.giva);
 router.route('/nirogam').get(mainController.nirogam);
 router.route('/traya').get(mainController.traya);
 router.route('/nissan').get(mainController.nissan);
 router.route('/theartment').get(mainController.theartment);
 router.route('/boldcare').get(mainController.boldcare);
 router.route('/andme').get(mainController.andme);
 router.route('/wowskinscience').get(mainController.wowskinscience);
 router.route('/damensch').get(mainController.damensch);
 router.route('/vahdamteas').get(mainController.vahdamteas);
 router.route('/mamaearth').get(mainController.mamaearth);
 router.route('/adilqadri').get(mainController.adilqadri);
 router.route('/plixlife').get(mainController.plixlife);
 router.route('/sarva').get(mainController.sarva);
 router.route('/gynoveda').get(mainController.gynoveda);
 router.route('/theayurvedaco').get(mainController.theayurvedaco);
 router.route('/supertails').get(mainController.supertails);
 router.route('/snazzyalign').get(mainController.snazzyalign);
 router.route('/shopg').get(mainController.shopg);
 router.route('/urbangabru').get(mainController.urbangabru);
 router.route('/ravinjeans').get(mainController.ravinjeans);
 router.route('/onmen').get(mainController.onmen);
 router.route('/tae').get(mainController.tae);
 router.route('/pilgrim').get(mainController.pilgrim);
 router.route('/coolberg').get(mainController.coolberg);
 router.route('/ragecoffee').get(mainController.ragecoffee);
 router.route('/arata').get(mainController.arata);
 router.route('/thejuneshop').get(mainController.thejuneshop);
 router.route('/sanfe').get(mainController.sanfe);
 router.route('/xyxx').get(mainController.xyxx);
 router.route('/autobot').get(mainController.autobot);
 // Production Pages
 router.route('/prod/anveshan').get(mainController.anveshan_prod);
 router.route('/prod/aadar').get(mainController.aadar_prod);
 router.route('/prod/manmatters').get(mainController.manmatters_prod);
 router.route('/prod/kapiva').get(mainController.kapiva_prod);
 router.route('/prod/captainzack').get(mainController.captainzack_prod);
 router.route('/prod/coccoon').get(mainController.coccoon_prod);
 router.route('/prod/bellavita').get(mainController.bellavita_prod);
 router.route('/prod/azah').get(mainController.azah_prod);
 router.route('/prod/drvaidya').get(mainController.drvaidya_prod);
 router.route('/prod/churchillshoes').get(mainController.churchillshoes_prod);
 router.route('/prod/bodywise').get(mainController.bodywise_prod);
 router.route('/prod/herbobuild').get(mainController.herbobuild_prod);
 router.route('/prod/themancompany').get(mainController.themancompany_prod);
 router.route('/prod/giva').get(mainController.giva_prod);
 router.route('/prod/nirogam').get(mainController.nirogam_prod);
 router.route('/prod/traya').get(mainController.traya_prod);
 router.route('/prod/nissan').get(mainController.nissan_prod);
 router.route('/prod/theartment').get(mainController.theartment_prod);
 router.route('/prod/boldcare').get(mainController.boldcare_prod);
 router.route('/prod/andme').get(mainController.andme_prod);
 router.route('/prod/wowskinscience').get(mainController.wowskinscience_prod);
 router.route('/prod/damensch').get(mainController.damensch_prod);
 router.route('/prod/vahdamteas').get(mainController.vahdamteas_prod);
 router.route('/prod/mamaearth').get(mainController.mamaearth_prod);
 router.route('/prod/adilqadri').get(mainController.adilqadri_prod);
 router.route('/prod/plixlife').get(mainController.plixlife_prod);
 router.route('/prod/sarva').get(mainController.sarva_prod);
 router.route('/prod/gynoveda').get(mainController.gynoveda_prod);
 router.route('/prod/theayurvedaco').get(mainController.theayurvedaco_prod);
 router.route('/prod/supertails').get(mainController.supertails_prod);
 router.route('/prod/snazzyalign').get(mainController.snazzyalign_prod);
 router.route('/prod/shopg').get(mainController.shopg_prod);
 router.route('/prod/urbangabru').get(mainController.urbangabru_prod);
 router.route('/prod/ravinjeans').get(mainController.ravinjeans_prod);
 router.route('/prod/onmen').get(mainController.onmen_prod);
 router.route('/prod/tae').get(mainController.tae_prod);
 router.route('/prod/pilgrim').get(mainController.pilgrim_prod);
 router.route('/prod/coolberg').get(mainController.coolberg_prod);
 router.route('/prod/ragecoffee').get(mainController.ragecoffee_prod);
 router.route('/prod/arata').get(mainController.arata_prod);
 router.route('/prod/thejuneshop').get(mainController.thejuneshop_prod);
 router.route('/prod/sanfe').get(mainController.sanfe_prod);
 router.route('/prod/xyxx').get(mainController.xyxx_prod);
 router.route('/prod/autobot').get(mainController.autobot_prod);
 
 module.exports = router;
 