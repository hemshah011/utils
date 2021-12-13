/**
 * Created by LimeChat
 */
 var fs = require('fs');
 var error = 'error';
 
 module.exports = {
     home: home,
     demos : demos,
     superbottoms : superbottoms,
     kaya : kaya,
     sugar : sugar,
     azah : azah,
     sirona : sirona,
     flintobox : flintobox,
     manmatters : manmatters,
     caratlane : caratlane,
     bewakoof : bewakoof,
     bodywise : bodywise,
     anveshan : anveshan,
     kapiva : kapiva,
     herbobuild : herbobuild,
     churchillshoes : churchillshoes,
     bellavita : bellavita,
     aadar : aadar,
     themancompany : themancompany,
     giva : giva,
     traya : traya,
     nissan: nissan,
     theartment: theartment,
     boldcare: boldcare,
     andme: andme,
     wowskinscience: wowskinscience,
     damensch: damensch,
     vahdamteas: vahdamteas,
     adilqadri: adilqadri,
     plixlife : plixlife,
     mamaearth: mamaearth,
     sarva : sarva,
     gynoveda: gynoveda,
     theayurvedaco: theayurvedaco,
     supertails: supertails,
     snazzyalign: snazzyalign,
     shopg: shopg,
     urbangabru: urbangabru,
     ravinjeans: ravinjeans,
     onmen: onmen,
     tae: tae,
     pilgrim: pilgrim,
     coolberg: coolberg,
     ragecoffee: ragecoffee,
     arata: arata,
     thejuneshop: thejuneshop,
     sanfe: sanfe,
     xyxx: xyxx,
     autobot: autobot,
     //Prod exports
     anveshan_prod : anveshan_prod,
     aadar_prod : aadar_prod,
     manmatters_prod : manmatters_prod,
     kapiva_prod : kapiva_prod,
     captainzack_prod : captainzack_prod,
     coccoon_prod : coccoon_prod,
     bellavita_prod : bellavita_prod,
     azah_prod : azah_prod,
     drvaidya_prod : drvaidya_prod,
     churchillshoes_prod : churchillshoes_prod,
     bodywise_prod : bodywise_prod,
     herbobuild_prod : herbobuild_prod,
     themancompany_prod : themancompany_prod,
     giva_prod : giva_prod,
     error_404: error_404,
     error_500: error_500,
     nirogam : nirogam,
     nirogam_prod : nirogam_prod,
     traya_prod : traya_prod,
     nissan_prod : nissan_prod,
     theartment_prod : theartment_prod,
     boldcare_prod : boldcare_prod,
     andme_prod: andme_prod,
     wowskinscience_prod: wowskinscience_prod,
     damensch_prod: damensch_prod,
     vahdamteas_prod: vahdamteas_prod,
     mamaearth_prod: mamaearth_prod,
     adilqadri_prod: adilqadri_prod,
     plixlife_prod : plixlife_prod,
     sarva_prod : sarva_prod,
     gynoveda_prod: gynoveda_prod,
     theayurvedaco_prod: theayurvedaco_prod,
     supertails_prod: supertails_prod,
     snazzyalign_prod: snazzyalign_prod,
     shopg_prod: shopg_prod,
     urbangabru_prod: urbangabru_prod,
     ravinjeans_prod: ravinjeans_prod,
     onmen_prod: onmen_prod,
     tae_prod: tae_prod,
     pilgrim_prod: pilgrim_prod,
     coolberg_prod: coolberg_prod,
     ragecoffee_prod: ragecoffee_prod,
     arata_prod: arata_prod,
     thejuneshop_prod: thejuneshop_prod,
     sanfe_prod: sanfe_prod,
     xyxx_prod: xyxx_prod,
     autobot_prod: autobot_prod
 };
 
 //==========================================================
 //==================== GET REQUEST =========================
 //==========================================================
 
 // Error Pages
 function error_404(req : any, res : any) {
     res.render(error + '/404.ejs', {
         title: '404 Error'
     });
 }
 
 function error_500(req : any, res : any) {
     res.render(error + '/500.ejs', {
         title: '500 Error'
     });
 }
 
 
 // LimeChat Pages
 function home(req : any, res : any) {
     res.render('index.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function demos(req : any, res : any) {
     res.render('demos.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 // Testing Exports
 function superbottoms(req : any, res : any) {
     res.render('company/superbottoms.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function kaya(req : any, res : any) {
     res.render('company/kaya.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function sugar(req : any, res : any) {
     res.render('company/sugar.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function azah(req : any, res : any) {
     res.render('company/azah.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function sirona(req : any, res : any) {
     res.render('company/sirona.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function flintobox(req : any, res : any) {
     res.render('company/flintobox.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function manmatters(req : any, res : any) {
     res.render('company/manmatters.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function caratlane(req : any, res : any) {
     res.render('company/caratlane.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function bewakoof(req : any, res : any) {
     res.render('company/bewakoof.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function bodywise(req : any, res : any) {
     res.render('company/bodywise.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function anveshan(req : any, res : any) {
     res.render('company/anveshan.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function kapiva(req : any, res : any) {
     res.render('company/kapiva.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function churchillshoes(req : any, res : any) {
     res.render('company/churchillshoes.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function herbobuild(req : any, res : any) {
     res.render('company/herbobuild.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function bellavita(req : any, res : any) {
     res.render('company/bellavita.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function coolberg(req : any, res : any) {
     res.render('company/coolberg.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function thejuneshop(req : any, res : any) {
     res.render('company/thejuneshop.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function aadar(req : any, res : any) {
     res.render('company/aadar.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function themancompany(req : any, res : any) {
     res.render('company/themancompany.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function giva(req : any, res : any) {
     res.render('company/giva.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function nirogam(req : any, res : any) {
     res.render('company/nirogam.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function traya(req : any, res : any) {
     res.render('company/traya.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function nissan(req : any, res : any) {
     res.render('company/nissan.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function theartment(req : any, res : any) {
     res.render('company/theartment.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function boldcare(req : any, res : any) {
     res.render('company/boldcare.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function andme(req : any, res : any) {
     res.render('company/andme.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function wowskinscience(req : any, res : any) {
     res.render('company/wowskinscience.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function damensch(req : any, res : any) {
     res.render('company/damensch.html', {
         user: req.session.user,
         title: 'LimeChat Demo for Damensch'
     });
 }
 
 function vahdamteas(req : any, res : any) {
     res.render('company/vahdamteas.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function mamaearth(req : any, res : any) {
     res.render('company/mamaearth.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 function adilqadri(req : any, res : any) {
     res.render('company/adilqadri.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 function gynoveda(req : any, res : any) {
     res.render('company/gynoveda.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 
 function plixlife(req : any, res : any) {
     res.render('company/plixlife.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function sarva(req : any, res : any) {
     res.render('company/sarva.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function theayurvedaco(req : any, res : any) {
     res.render('company/theayurvedaco.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function supertails(req : any, res : any) {
     res.render('company/supertails.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function snazzyalign(req : any, res : any) {
     res.render('company/snazzyalign.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function shopg(req : any, res : any) {
     res.render('company/shopg.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function urbangabru(req : any, res : any) {
     res.render('company/urbangabru.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function ravinjeans(req : any, res : any) {
     res.render('company/ravinjeans.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function onmen(req : any, res : any) {
     res.render('company/onmen.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function tae(req : any, res : any) {
     res.render('company/tae.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function pilgrim(req : any, res : any) {
     res.render('company/pilgrim.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function ragecoffee(req : any, res : any) {
     res.render('company/ragecoffee.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function arata(req : any, res : any) {
     res.render('company/arata.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function sanfe(req : any, res : any) {
     res.render('company/sanfe.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function xyxx(req : any, res : any) {
     res.render('company/xyxx.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }

 function autobot(req : any, res : any) {
     res.render('company/autobot.html', {
         user: req.session.user,
     });
 }
 // Production Exports
 function aadar_prod(req : any, res : any) {
     res.render('production/aadar.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function azah_prod(req : any, res : any) {
     res.render('production/azah.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function bellavita_prod(req : any, res : any) {
     res.render('production/bellavita.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function captainzack_prod(req : any, res : any) {
     res.render('production/captainzack.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function coccoon_prod(req : any, res : any) {
     res.render('production/coccoon.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function manmatters_prod(req : any, res : any) {
     res.render('production/manmatters.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function churchillshoes_prod(req : any, res : any) {
     res.render('production/churchillshoes.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function kapiva_prod(req : any, res : any) {
     res.render('production/kapiva.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function drvaidya_prod(req : any, res : any) {
     res.render('production/drvaidya.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function thejuneshop_prod(req : any, res : any) {
     res.render('production/thejuneshop.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function anveshan_prod(req : any, res : any) {
     res.render('production/anveshan.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function bodywise_prod(req : any, res : any) {
     res.render('production/bodywise.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function herbobuild_prod(req : any, res : any) {
     res.render('production/herbobuild.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function themancompany_prod(req : any, res : any) {
     res.render('production/themancompany.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function giva_prod(req : any, res : any) {
     res.render('production/giva.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function nirogam_prod(req : any, res : any) {
     res.render('production/nirogam.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function traya_prod(req : any, res : any) {
     res.render('production/traya.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function nissan_prod(req : any, res : any) {
     res.render('production/nissan.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function theartment_prod(req : any, res : any) {
     res.render('production/theartment.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function boldcare_prod(req : any, res : any) {
     res.render('production/boldcare.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function andme_prod(req : any, res : any) {
     res.render('production/andme.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function wowskinscience_prod(req : any, res : any) {
     res.render('production/wowskinscience.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function damensch_prod(req : any, res : any) {
     res.render('production/damensch.html', {
         user: req.session.user,
         title: 'LimeChat Demo for Damensch'
     });
 }
 
 function vahdamteas_prod(req : any, res : any) {
     res.render('production/vahdamteas.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function mamaearth_prod(req : any, res : any) {
     res.render('production/mamaearth.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 function gynoveda_prod(req : any, res : any) {
     res.render('production/gynoveda.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 function adilqadri_prod(req : any, res : any) {
     res.render('production/adilqadri.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function plixlife_prod(req : any, res : any) {
     res.render('production/plixlife.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function coolberg_prod(req : any, res : any) {
     res.render('production/coolberg.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function sarva_prod(req : any, res : any) {
     res.render('production/sarva.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function theayurvedaco_prod(req : any, res : any) {
     res.render('production/theayurvedaco.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function supertails_prod(req : any, res : any) {
     res.render('production/supertails.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function snazzyalign_prod(req : any, res : any) {
     res.render('production/snazzyalign.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function shopg_prod(req : any, res : any) {
     res.render('production/shopg.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function urbangabru_prod(req : any, res : any) {
     res.render('production/urbangabru.html', {
         user: req.session.user,
         title: ':LimeChat Demo'
     });
 }
 
 function ravinjeans_prod(req : any, res : any) {
     res.render('production/ravinjeans.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function onmen_prod(req : any, res : any) {
     res.render('production/onmen.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function tae_prod(req : any, res : any) {
     res.render('production/tae.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function pilgrim_prod(req : any, res : any) {
     res.render('production/pilgrim.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 function ragecoffee_prod(req : any, res : any) {
     res.render('production/ragecoffee.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function arata_prod(req : any, res : any) {
     res.render('production/arata.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function sanfe_prod(req : any, res : any) {
     res.render('production/sanfe.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }
 
 function xyxx_prod(req : any, res : any) {
     res.render('production/xyxx.html', {
         user: req.session.user,
         title: 'LimeChat Demo'
     });
 }