$(function () {


    $("#img-loading-screen-background").css('display', 'block');

    /**POPULATE PAGE QUICK LINKS**************************************/
    if ($('#rd_pagelinks').length) {
        if ($('[id^="rdql_"]').length) {
            var qlparents = [];
            $('[id^="rdql_"').each(function () {
                if ($(this).attr('data-qlseparator') != undefined && $(this).attr('data-qlseparator') != "") {
                    var qlitem = '<hr />';
                    $('#rd_pagelinks').append(qlitem);
                } else {
                    var qlhref = $(this).attr('id');
                    var qltext = $(this).attr('data-qltext').replace(/'/g, "&#39;");
                    var qlitem = '<li class="pure-menu-item"><a href="#' + qlhref +
                        '" class="pure-menu-link">' + qltext + '</a></li>';
                    var qlparent = $(this).attr('data-qlparent');

                    if (qlparent == undefined || qlparent == "") {
                        $('#rd_pagelinks').append(qlitem);
                    } else {
                        var qlparentVal = qlparent.replace(/'/g, "&#39;");
                        var qlparentID = qlparent.replace(/'/g, "");
                        qlparentID = qlparentID.replace(/ /g, "_");
                        qlparentID = qlparentID.replace(/[.*+?^$#{}()|[\]\\]/g, "_");
                        qlparentID = "qlp_" + qlparentID.toLowerCase();

                        if ($.inArray(qlparentID, qlparents) == -1) {
                            qlparents.push(qlparentID);

                            var qlitemParent = '<li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover pure-menu-submenu">' +
                                '<a href="#rd' + qlparentID + '" class="pure-menu-link">' + qlparentVal + '</a>' +
                                '<ul id="' + qlparentID + '" class="pure-menu-children">' + qlitem + '</ul>' +
                                '</li>';
                            $('#rd_pagelinks').append(qlitemParent);
                        } else {
                            $('#' + qlparentID).append(qlitem);
                        }
                    }
                }

            });
        } else {
            $('#rd_pagelinks').html('<li class="pure-menu-item pure-menu-disabled">No quick links found on this page.</li>');
        }
    }

    var $rdql_root = $('html, body');
    $(document).on('click', 'a[href^="#rdql_"], a[href^="#rdqlp_"]', function (event) {
        event.preventDefault();
        var scrollTop = true;
        if ($(this).attr('href') !== undefined) {
            var linkloc = $(this).attr('href');
            var scrollbottom = $(linkloc).attr('data-scrollbottom');

            if (scrollbottom !== undefined) {
                if (scrollbottom == "true") {
                    scrollTop = false;
                    bottompos = $(linkloc).offset().top - $(window).height() + $(linkloc).outerHeight(true);
                    $rdql_root.animate({
                        scrollTop: bottompos
                    }, 500);
                }
            }

            if (scrollTop == true) {
                $rdql_root.animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 100
                }, 500);
            }
        }
    });

    /*****************************************************************/

    /**MODAL IMAGES***************************************************************/

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    function SetUpModalImages() {
        if ($('.img-modal').length > 0) {
            $(document).on('click', '.img-modal', function () {
                $("#img-modal-overlay").css('display', 'block');
                $("#img-modal-expanded").prop('src', $(this).prop('src'));
                $("#img-modal-expanded").attr('alt', $(this).attr('alt'));
                $("#img-modal-caption").text($(this).attr('alt') ?? '');
            });
            // When the user clicks on <span> (x), close the modal
            $('#img-modal-close').click(function () {
                $("#img-modal-overlay").css('display', 'none');
            });
            $('#img-modal-overlay').click(function () {
                if (this.id == 'img-modal-overlay') {
                    $("#img-modal-overlay").css('display', 'none');
                }
            });
            $(document).keyup(function (e) {
                if (e.key === "Escape") {
                    $("#img-modal-overlay").css('display', 'none');
                }
            });
        }
    }

    /*****************************************************************/

    /**TOKEN REPLACEMENTS****************************************************************/
    var tokenBBCode = [
        "[[ico-b-g]]",
        "[[ico-b-b]]"
    ];

    var tokenBBCodeReplacementHtml = [
        '<span class="ico-b-g"></span>',
        '<span class="ico-b-b"></span>'
    ];

    $('.postbody, .post-content').each(function () {
        var posthtml = "";
        posthtml = $(this).html();
        for (var i = 0; i < tokenBBCode.length; i++) {
            posthtml = posthtml.replaceAll(tokenBBCode[i], tokenBBCodeReplacementHtml[i]);
        };
        $(this).html(posthtml);
    });

    posthtml = null;
    tokenBBCodeReplacementHtml = null;
    tokenBBCode = null;

    /******************************************************/


    /**ICON TOKEN REPLACEMENTS***************************************************************/
    var iconBB = [
        'jerryrigger',
        'windcaller',
        'barrelcrazed',
        'hammerhanded',
        'masterchef',
        'dulcetvirtuoso',
        'nauticalalmanac',
        'firstaidkit',
        'shipbringer',
        'punchoutguru',
        'berryprinter',
        'bellyprinter',
        'hardboiled',
        'childofdestiny',
        'dreamsneverdie',
        'freakofnature',
        'jurassicbark',
        'untouchable',
        'dragonheart',
        'bookworm',
        'baneoftheweak',
        'devilsadvocate',
        'strollingdeath',
        'thechosenone',
        'riseandshine',
        'kenbunspec',
        'busospec',
        'haospec',
        'kenbunasc',
        'busoasc',
        'haoasc',
        '1needlelog',
        '3needlelog',
        'mythicalzoan',
        'logia',
        'ancientzoan',
        'steelbracing',
        'colaengine',
        'chaincannons',
        'seaprismstonekeel',
        'submarine',
        'blimp',
        'treasuretreeadamwood',
        'atkt1',
        'atkt2',
        'atkt3',
        'atkt4',
        'atkt5',
        'atkt6',
        'atkt4_df',
        'atkt5_df',
        'atkt6_df',
        'atkt4_sp',
        'atkt5_sp',
        'atkt6_sp',
        'atkt1_br',
        'atkt2_br',
        'atkt3_br',
        'atkt4_br',
        'atkt5_br',
        'atkt4_br_df',
        'atkt5_br_df',
        'atkt4_br_sp',
        'atkt5_br_sp',
        'deft1',
        'deft2',
        'deft3',
        'deft4',
        'deft5',
        'deft6',
        'deft4_df',
        'deft5_df',
        'deft6_df',
        'deft4_sp',
        'deft5_sp',
        'deft6_sp',
        'deft1_br',
        'deft2_br',
        'deft3_br',
        'deft4_br',
        'deft5_br',
        'deft4_br_df',
        'deft5_br_df',
        'deft4_br_sp',
        'deft5_br_sp',
        'rxt1',
        'rxt2',
        'rxt3',
        'rxt4',
        'rxt5',
        'rxt6',
        'rxt4_df',
        'rxt5_df',
        'rxt6_df',
        'rxt4_sp',
        'rxt5_sp',
        'rxt6_sp',
        'rxt1_br',
        'rxt2_br',
        'rxt3_br',
        'rxt4_br',
        'rxt5_br',
        'rxt4_br_df',
        'rxt5_br_df',
        'rxt4_br_sp',
        'rxt5_br_sp',
        'wpt1',
        'wpt2',
        'wpt3',
        'wpt4',
        'wpt5',
        'wpt6',
        'wpt4_df',
        'wpt5_df',
        'wpt6_df',
        'wpt4_sp',
        'wpt5_sp',
        'wpt6_sp',
        'wpt1_br',
        'wpt2_br',
        'wpt3_br',
        'wpt4_br',
        'wpt5_br',
        'wpt4_br_df',
        'wpt5_br_df',
        'wpt4_br_sp',
        'wpt5_br_sp',
        'atkt6_br',
        'atkt6_br_sp',
        'atkt6_br_df',
        'deft6_br',
        'deft6_br_sp',
        'deft6_br_df',
        'rxt6_br',
        'rxt6_br_sp',
        'rxt6_br_df',
        'wpt6_br',
        'wpt6_br_sp',
        'wpt6_br_df',
        'screwyourngesus',
        'tacticalretreat',
        'undertheradar',
        'identitytheft',
        'socialdistancing',
        'landcrawler',
        'skinofyourteeth',
        'freedomoftravel',
        'themaxwelltreatment',
        'improviseadaptovercome'
    ];
    var iconImage = [
        'https://i.servimg.com/u/f60/18/75/26/17/jerryr10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/windca10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/barrel10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/hammer10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/master10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/dulcet10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/nautic10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/firsta10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/shipbr10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/puncho10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/berryp10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/berryp10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/hardbo10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/childo10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/dreams11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/freako10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/jurass10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/untouc10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/dragon10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/bookwo10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/baneof10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/devils10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/stroll10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/thecho11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/risean10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/kenbun10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/busosh10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/haosho10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/kenbun11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/busosh11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/haosho11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/1needl10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/3needl10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/mythzo10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/logiaf10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/ancien10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/steelb10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/colaen10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/chainc10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/seapri10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/submar10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/blimp10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/treasu10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt110.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt210.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt310.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt410.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt510.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt610.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt4_14.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt5_14.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt6_11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt4_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt5_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt6_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt1_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt2_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt3_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt4_11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt5_11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt4_12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt5_12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt4_13.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt5_13.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft110.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft210.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft310.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft410.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft510.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft610.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft4_12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft5_12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft6_11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft4_14.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft5_14.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft6_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft1_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft2_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft3_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft4_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft5_11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft4_13.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft5_13.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft4_11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft5_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt110.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt210.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt310.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt410.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt510.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt610.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt4_d10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt5_d10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt6_d10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt4_s10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt5_s10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt6_s10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt1_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt2_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt3_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt4_b11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt5_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt4_b12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt5_b12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt4_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt5_b11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt110.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt210.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt310.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt410.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt510.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt610.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt4_d10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt5_d10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt6_d10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt4_s10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt5_s10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt6_s10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt1_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt2_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt3_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt4_b11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt5_b11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt4_b12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt5_b12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt4_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt5_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt6_12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt6_13.png',
        'https://i.servimg.com/u/f60/18/75/26/17/atkt6_14.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft6_12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft6_13.png',
        'https://i.servimg.com/u/f60/18/75/26/17/deft6_14.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt6_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt6_b11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/rxt6_b12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt6_b10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt6_b11.png',
        'https://i.servimg.com/u/f60/18/75/26/17/wpt6_b12.png',
        'https://i.servimg.com/u/f60/18/75/26/17/screw_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/tactic10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/under_10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/identi10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/social10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/ship_110.png',
        'https://i.servimg.com/u/f60/18/75/26/17/skinof10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/freedo11.png',
        'https://i60.servimg.com/u/f60/18/75/26/17/themax10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/improv10.png'
    ];

    var tooltipText = [
        '<strong>Jerry Rigger</strong><br />+25% Hull for 2 rounds',
        '<strong>Wind Caller</strong><br />+25% Sails for 2 rounds',
        '<strong>Barrel Crazed</strong><br />+25% Cannons for 2 rounds',
        '<strong>Hammerhanded</strong><br />One equipment repair per thread',
        '<strong>Master Chef</strong><br />All party members start combat with 110% HP',
        '<strong>Dulcet Virtuoso</strong><br />+10% to ATK and RX for party for 3 rounds',
        '<strong>Nautical Almanac</strong><br />+2 to ship combat escape roll value',
        '<strong>Walking, Talking First Aid Kit</strong><br />Revive and UT Heals',
        '<strong>Ship Bringer</strong><br />One ship repair per thread',
        '<strong>Punchout Guru</strong><br />+0.20 EXP Bonus to all allies in a quest',
        '<strong>Belly Printer</strong><br />+0.20 Income Bonus to all allies in a quest',
        '<strong>Belly Printer</strong><br />+0.20 Income Bonus to all allies in a quest',
        '<strong>Hard-boiled</strong><br />+15 stats',
        '<strong>Child of Destiny</strong><br />+25 stats',
        '<strong>Dreams Never Die</strong><br />Resist knockout once per thread',
        '<strong>Freak of Nature</strong><br />Stat buffs at low health',
        '<strong>Jurassic Bark</strong><br />Ancient zoan eater',
        '<strong>Untouchable</strong><br />Logia user',
        '<strong>Dragonheart</strong><br />Mythical zoan eater',
        '<strong>Bookworm</strong><br />Poneglyph literate',
        '<strong>Bane of the Weak</strong><br />Haoshoku user',
        '<strong>Devil&#8217;s Advocate</strong><br />+100 stats',
        '<strong>Strolling Death</strong><br />+200 stats',
        '<strong>The Chosen One</strong><br />Inherited the Will of D',
        '<strong>Rise and Shine</strong><br />Awakening/Mastery Unlocked',
        '<strong>Haki Specialization</strong><br />Kenbunshoku',
        '<strong>Haki Specialization</strong><br />Busoshoku',
        '<strong>Haki Specialization</strong><br />Haoshoku',
        '<strong>Haki Ascendancy</strong><br />Kenbunshoku',
        '<strong>Haki Ascendancy</strong><br />Busoshoku',
        '<strong>Haki Ascendancy</strong><br />Haoshoku',
        '<strong>One-Needle Log Pose</strong><br />Travel across Paradise',
        '<strong>Three-Needle Log Pose</strong><br />Travel across the New World',
        '<strong>Mythical Zoan Fruit</strong><br />An unused devil fruit',
        '<strong>Logia Fruit</strong><br />An unused devil fruit',
        '<strong>Ancient Zoan Fruit</strong><br />An unused devil fruit',
        '<strong>Steel Bracing</strong><br />+25% Hull for 2 rounds',
        '<strong>Cola Engine</strong><br />+25% Sails for 2 rounds',
        '<strong>Chain Cannons</strong><br />+25% Cannons for 2 rounds',
        '<strong>Sea Prism Stone Keel</strong><br />Sail through Calm Belt',
        '<strong>Submarine (Toggle)</strong><br />+25% Sails, -25% Cannons',
        '<strong>Blimp (Toggle)</strong><br />+25% Cannons, -25% Hull',
        '<strong>Treasure Tree Adam Wood</strong><br />+100 HP',
        '<strong>Tier 1 Equipment</strong><br />+5 ATK',
        '<strong>Tier 2 Equipment</strong><br />+10 ATK',
        '<strong>Tier 3 Equipment</strong><br />+15 ATK',
        '<strong>Tier 4 Equipment</strong><br />+20 ATK',
        '<strong>Tier 5 Equipment</strong><br />+30 ATK',
        '<strong>Tier 6 Equipment</strong><br />+50 ATK',
        '<strong>Tier 4 Equipment</strong><br />+20 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 1 Equipment</strong><br />+5 ATK<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 2 Equipment</strong><br />+10 ATK<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 3 Equipment</strong><br />+15 ATK<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 ATK<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 ATK<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 1 Equipment</strong><br />+5 DEF',
        '<strong>Tier 2 Equipment</strong><br />+10 DEF',
        '<strong>Tier 3 Equipment</strong><br />+15 DEF',
        '<strong>Tier 4 Equipment</strong><br />+20 DEF',
        '<strong>Tier 5 Equipment</strong><br />+30 DEF',
        '<strong>Tier 6 Equipment</strong><br />+50 DEF',
        '<strong>Tier 4 Equipment</strong><br />+20 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 1 Equipment</strong><br />+5 DEF<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 2 Equipment</strong><br />+10 DEF<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 3 Equipment</strong><br />+15 DEF<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 DEF<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 DEF<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 1 Equipment</strong><br />+5 RX',
        '<strong>Tier 2 Equipment</strong><br />+10 RX',
        '<strong>Tier 3 Equipment</strong><br />+15 RX',
        '<strong>Tier 4 Equipment</strong><br />+20 RX',
        '<strong>Tier 5 Equipment</strong><br />+30 RX',
        '<strong>Tier 6 Equipment</strong><br />+50 RX',
        '<strong>Tier 4 Equipment</strong><br />+20 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 1 Equipment</strong><br />+5 RX<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 2 Equipment</strong><br />+10 RX<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 3 Equipment</strong><br />+15 RX<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 RX<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 RX<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 1 Equipment</strong><br />+5 WP',
        '<strong>Tier 2 Equipment</strong><br />+10 WP',
        '<strong>Tier 3 Equipment</strong><br />+15 WP',
        '<strong>Tier 4 Equipment</strong><br />+20 WP',
        '<strong>Tier 5 Equipment</strong><br />+30 WP',
        '<strong>Tier 6 Equipment</strong><br />+50 WP',
        '<strong>Tier 4 Equipment</strong><br />+20 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span>',
        '<strong>Tier 1 Equipment</strong><br />+5 WP<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 2 Equipment</strong><br />+10 WP<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 3 Equipment</strong><br />+15 WP<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 WP<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 WP<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 4 Equipment</strong><br />+20 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 5 Equipment</strong><br />+30 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 ATK<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 ATK<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 DEF<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 DEF<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 RX<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 RX<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 WP<br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Sea Prism Stone Tipped)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Tier 6 Equipment</strong><br />+50 WP<br /><span class=&quot;equipment-attachment-text&quot;>(Devil Fruit Fed)</span><br /><span class=&quot;equipment-broken-text&quot;>(Broken)</span>',
        '<strong>Screw You, RNGesus</strong><br />Do a combat re-roll',
        '<strong>Tactical Retreat</strong><br />Increase success chance of next escape attempt significantly',
        '<strong>Under The Radar</strong><br />Freeze bounty',
        '<strong>Identity Theft</strong><br />Counter information metagame',
        '<strong>Social Distancing</strong><br />Reduce quest player requirement',
        '<strong>Land Crawler (Toggle)</strong><br />+25% Hull, -25% Sails',
        '<strong>Skin Of Your Teeth</strong><br />Downgrade first crit to solid hit',
        '<strong>Freedom Of Travel</strong><br />Bypass sea restrictions for a new quest',
        '<strong>The Maxwell Treatment</strong><br />Borderline flirty grading comments from Gray',
        '<strong>Improvise, Adapt, Overcome</strong><br />Respec fighting style'
    ];
    $('.postbody, .field_uneditable, .postprofile, .message-text').each(function () {
        var oldhtml = "";
        oldhtml = $(this).html();
        for (var i = 0; i < iconBB.length; i++) {
            var iconBBCode = '[[' + iconBB[i] + ']]';
            var iconBBCode = iconBBCode.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            var iconBBRegExp = new RegExp(iconBBCode, 'g');
            oldhtml = oldhtml.replace(iconBBRegExp, '<a class="icon-link" data-bs-toggle="tooltip" data-bs-html="true" title="' + tooltipText[i] + '"><img src="' + iconImage[i] + '"  class="icon-image" /></a> ');
        };
        $(this).html(oldhtml);
    });
    iconBB = null;
    iconImage = null;
    tooltipText = null;

    /*****************************************************************/

    /**CODE BOX SELECT ALL******************************************************/

    $("dl.codebox:not(.spoiler,.hidecode)  > dd.code, dl.codebox:not(.spoiler,.hidecode)  > dd > code").closest("dl").find('dt')
        .append('<a class="selectCode" data-bs-toggle="tooltip" title="Select Code"><img class="selectCodeImg" src="https://i.servimg.com/u/f60/18/75/26/17/select10.png" /></a>');

    $(document).on('click', '.selectCode', function () {
        var doc = document,
            text = $(this).closest("dl").find(".cont_code,code").get(0),
            range, selection;
        if (doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    });

    /*****************************************************************/

    /**NEWS COO***************************************************************/
    $("#newsareal1").load("/f2-history-and-lore div.topictitle:lt(10)");
    /*****************************************************************/

    /**PROFILE PREVIEW***************************************************************/
    // var links = $('a[href^="/u"]').filter(function () {
    //         if (this.firstChild && this.firstChild.tagName) {
    //             if (this.firstChild.tagName != 'IMG') {
    //                 return this;
    //             }
    //         } else {
    //             return this;
    //         }
    //     }),

    //     usersinfo = {};

    // links.tooltipster && links.not('.mentiontag, .tooltipstered').filter(function () {
    //     if (!$(this).closest('#tabs')[0]) {
    //         return this;
    //     }
    // }).tooltipster({
    //     animation: 'fade',
    //     interactive: true,
    //     contentAsHTML: true,
    //     minWidth: 300,
    //     maxWidth: 300,
    //     delay: 500,
    //     arrowColor: "#EEE",
    //     autoClose: true,
    //     content: 'Loading...',
    //     functionBefore: function (origin, continueTooltip) {
    //         continueTooltip();

    //         var userid = $(this).attr('href').replace(/.*?\/u(\d+).*/, '$1');
    //         if (origin.data('ajax') !== 'cached') {
    //             if (usersinfo[userid] != undefined) {
    //                 origin.tooltipster('content', usersinfo[userid]).data('ajax', 'cached');
    //             } else {
    //                 $.ajax({
    //                     type: 'GET',
    //                     url: "/ajax/index.php",
    //                     dataType: "html",

    //                     data: {
    //                         f: "m",
    //                         user_id: userid
    //                     },

    //                     success: function (html) {
    //                         usersinfo[userid] = html;
    //                         origin.tooltipster('content', html).data('ajax', 'cached');
    //                     }
    //                 });
    //             }
    //         }
    //     }
    // });
    /*****************************************************************/


    /**EXTRA FONT***************************************************************/

    $('.sceditor-button-font').click(function () {
        addFont('Calibri');
        addFont('Papyrus');
        addFont('Avantgarde');
        addFont('Baskerville');
        addFont('Garamond');

        $('.sceditor-font-option.new-font').click(function (e) {
            $('#text_editor_textarea').sceditor('instance').insertText('[font=' + $(this).attr('data-font') + ']', '[/font]');
            $('.sceditor-font-picker').remove();
            e.preventDefault()
        })
    });

    function addFont(font) {
        $('.sceditor-font-picker div')
            .append('<a unselectable="on" class="sceditor-font-option new-font" href="#" data-font="' + font + '"><font unselectable="on" face="' + font + '">' + font + '</font></a>')
    }

    /**BBCode Parser***************************************************************/
    /*
    *  Application: Create New BBCode Tags
    *  Date: 18/05/2018
    *  Version: 1.321052018
    *  Copyright (c) 2018 Daemon <help.forumotion.com>
    *  This work is free. You can redistribute it and/or modify it
    */
    BBParser = {
        initialize: function () {
            $(function () {
                BBParser.setupBBParser();
            });
        },
        add: [
            /*
            * Note: Add a comma at the end of each new entry
            * '{option}' corresponds to the optional tag title, and '{content}' correspond to the text between the tags
            */
            {
                tag: 'ber', // belly
                close: false,
                defaultOption: 'g', // option 'b' for black icon and 'r' for red icon
                replacement: '<span class="ico-b-{option}" data-bs-toggle="tooltip" title="Belly"></span>'
            },
            {
                tag: 'bel', // belly
                close: false,
                defaultOption: 'g', // option 'b' for black icon and 'r' for red icon
                replacement: '<span class="ico-b-{option}" data-bs-toggle="tooltip" title="Belly"></span>'
            },
            {
                tag: 'approve',
                close: true,
                defaultOption: 'Approved!',
                replacement: '<div class="notice notice-success"><h5>{option}</h5><div>{content}</div></div>'
            },
            {
                tag: 'approved',
                close: false,
                defaultOption: 'Approved!',
                replacement: '<div class="notice notice-success"><h5>{option}</h5><div></div></div>'
            },
            {
                tag: 'warn',
                close: true,
                defaultOption: 'See assessment comment(s) below.',
                replacement: '<div class="notice notice-warn"><h5>{option}</h5><div>{content}</div></div>'
            },
            {
                tag: 'warned',
                close: false,
                defaultOption: 'See assessment comment(s) below.',
                replacement: '<div class="notice notice-warn"><h5>{option}</h5><div></div></div>'
            },
            {
                tag: 'info',
                close: true,
                replacement: '<div class="notice notice-info"><h5>{option}</h5><div>{content}</div></div>'
            },
            {
                tag: 'reject',
                close: true,
                replacement: '<div class="notice notice-alert"><h5>{option}</h5><div>{content}</div></div>'
            },
            {
                tag: 'ass', // assessment
                close: true,
                replacement: '<span class="assessment-quote" data-bs-toggle="tooltip" title="{option}">{content}</span>'
            },
            {
                tag: 'dass', // detailed assessment
                close: true,
                defaultOption: 'Click to view comment(s).',
                replacement: '<span data-bs-toggle="tooltip" title="{option}"><span class="assessment-quote detailed-assessment-quote" data-bs-toggle="modal" data-bs-target="#assessment-modal">{content}</span></span>'
            },
            {
                tag: 'cmt', // detailed assessment comments
                close: true,
                replacement: `<span class="assessment-comment">{content}</span>`
            },
            {
                tag: 'inlinespoiler', // inline spoilers
                close: true,
                replacement: `<span class="inlinespoiler inlinespoiler-hidden">{content}</span>`
            },
            {
                tag: 'inlinecode', // inline code
                close: true,
                replacement: `<span class="inlinecode">{content}</span>`
            },
            {
                tag: 'tracker', // tracker link
                close: false,
                replacement: '<a href="{option}" class="tracker-link">Tracker</a>'
            },
            {
                tag: 'ctracker', // tracker link with custom name
                close: true,
                replacement: '<a href="{option}" class="tracker-link">{content}</a>'
            },
            {
                tag: 'tag', // tag (just a fancy link to anything)
                close: true,
                replacement: '<span data-bs-toggle="tooltip" title="{content}"><a href="{option}" class="tag-link"><span class="title_prefix title_prefix-tag">{content}</span></a></span>'
            },
            {
                tag: 'turf', // turf details link
                close: true,
                replacement: '<span data-bs-toggle="tooltip" title="Turf Details"><a href="{option}" class="turf-details-link"><span class="title_prefix title_prefix-turf-details">{content}</span></a></span>'
            },
            {
                tag: 'npc', // npc dialogue colouring
                close: true,
                defaultOption: 'misc',
                replacement: '<span class="{option}">{content}</span>'
            },
            {
                tag: 'plyr', // player dialogue colouring
                close: true,
                defaultOption: 'misc',
                replacement: '<span class="plyr {option}">{content}</span>'
            },
            {
                tag: 'ximg', // player dialogue colouring
                close: true,
                defaultOption: '',
                replacement: '<img class="img-modal" alt="{option}" src="{content}" />',
                replace: function (option, content) {
                    return $(content).first().attr('href');
                }
            },
            {
                tag: 'discord',
                close: true,
                replacement: '<span class="discord-channel-tag">{content}</span>',
                replace: function (option, content) {
                    let channelLink = 'discord://discord.com/channels/260564262446039064/260564262446039064';
                    let channelName = '💀・revdawn';
                    switch (content) {
                        case 'rules':
                            channelLink = 'discord://discord.com/channels/260564262446039064/908760658458320916';
                            channelName = '🧾・rules';
                            break;
                        case 'announcements':
                            channelLink = 'discord://discord.com/channels/260564262446039064/390618985277685760';
                            channelName = '📢・announcements';
                            break;
                        case 'site-rule-updates':
                            channelLink = 'discord://discord.com/channels/260564262446039064/604935559189889044';
                            channelName = '📰・site-rule-updates';
                            break;
                        case 'plotting':
                            channelLink = 'discord://discord.com/channels/260564262446039064/603784693812428800';
                            channelName = '🪢・plotting';
                            break;
                        case 'combat-encounters':
                            channelLink = 'discord://discord.com/channels/260564262446039064/1082001795670364301';
                            channelName = '👊・combat-encounters';
                            break;
                        case 'combat-management':
                            channelLink = 'discord://discord.com/channels/260564262446039064/1082028927188488202';
                            channelName = '🔩・combat-management';
                            break;
                        case 'approval-requests':
                            channelLink = 'discord://discord.com/channels/260564262446039064/390616825102336024';
                            channelName = '✅・approval-requests';
                            break;
                        case 'help-desk':
                            channelLink = 'discord://discord.com/channels/260564262446039064/297160666991689728';
                            channelName = '🆘・help-desk';
                            break;
                    }
                    content = `<a class="discord-channel-link" href="${channelLink}" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" class="discord-channel-icon" aria-label="Channel" aria-hidden="false" role="img"><path fill="currentColor" fill-rule="evenodd" d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z" clip-rule="evenodd" class=""></path></svg> ${channelName}</a>`;
                    return content;
                }
            },
            {
                tag: 'discordthread',
                close: true,
                replacement: '<span class="discord-channel-tag"><a class="discord-channel-link" href="{option}" target="_blank"><svg class="discord-channel-icon" aria-label="Thread" aria-hidden="false" role="img" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z" fill="currentColor" class=""></path></svg> {content}</a></span>'
            },
            {
                tag: 'guest',
                close: true,
                replacement: '<div class="guest">{content}</div>',
                replace: function (option, content) {
                    if (_userdata.session_logged_in < 1) {
                        return 'You need to be logged in to view this content';
                    }
                    return content;
                }
            }

            // Note: Do not add a comma at the end of the last entry
        ],
        // Do not change anything down
        validateTag: function (a) {
            if (!/^\w+$/.test(a)) throw new RangeError("You added an invalid tag: " + a);
        },
        replacers: function (a, b, c) {
            return (a || "").replace(/{option}/g, b || "").replace(/{content}/g, c || "");
        },
        optionReg: /.*?=("|'|)(.*?)\1\]/,
        parsedContent: function (a, b, c) {
            return a.replace(c ? RegExp("(\\[" + b.tag + "[^\\]]*\\])([\\s\\S]*?)\\[/" + b.tag + "]", "g" + (b.insensitive ? "i" : "")) : RegExp("\\[" + b.tag + "[^\\]]*\\]", "g" + (b.insensitive ? "i" : "")), function (d, e, f) {
                c || (e = d);
                e = BBParser.optionReg.test(e) ? e.replace(BBParser.optionReg, "$2") : b.defaultOption;
                if ("undefined" !== typeof b.replace) {
                    d = c ? b.replace(e, f) : b.replace(e);
                    "string" === typeof d ? c ? f = d : e = d : d;
                    "object" === typeof d && (e = d.option || e, f = d.content || f);
                }
                return BBParser.replacers(b.replacement, e, f);
            });
        },
        setupBBParser: function () {
            var postBody = $(".postbody, .blog_message, .postprofile-info, .field_uneditable, .message-text,  .post-content");
            for (var i = 0, e; (e = postBody[i++]);) {
                for (var j in BBParser.add) {
                    var item = BBParser.add[j];
                    // Validating tag
                    BBParser.validateTag(item.tag);
                    e.innerHTML = BBParser.parsedContent(e.innerHTML, item, item.close);
                }
            }

            /**SETUP EVENT HANDLERS AND ALL OTHER FUNCTIONS*******************************/
            SetUpModalImages();
            SetUpTimeLineEventListners();
            SetUpInlineSpoilers();
            SetUpAssessmentIcons();
            SetUpTooltips();
            SetUpAssessmentFramework();
            PopulateCharacterAges();
            SetUpTopicTags();
            $("#img-loading-screen-background").css('display', 'none');
            /*******************************************************************************/
        }
    };
    BBParser.initialize();
    /**************************************************/

    /**TOPIC TAGS/PREFIXES***************************************************************/
    function SetUpTopicTags() {
        var TOPIC_PREFIXES = [];
        var invisible = 0;
        var visible = 1;
        /**** BEGIN EDITABLE ZONE ***/
        TOPIC_PREFIXES.push(new Array("[Episode]", "#fff", visible));
        TOPIC_PREFIXES.push(new Array("[Arc]", "#fff", visible));
        TOPIC_PREFIXES.push(new Array("[Saga]", "#fff", visible));
        TOPIC_PREFIXES.push(new Array("[World Event]", "#fff", visible));
        TOPIC_PREFIXES.push(new Array("[Bio]", "#fff", visible));
        TOPIC_PREFIXES.push(new Array("[Tracker]", "#fff", visible));
        TOPIC_PREFIXES.push(new Array("[Crew]", "#fff", visible));
        TOPIC_PREFIXES.push(new Array("[Alliance]", "#fff", visible));
        TOPIC_PREFIXES.push(new Array("[Advertisement]", "#fff", visible));

        // Hidden
        TOPIC_PREFIXES.push(new Array("[Info]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Lore]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Closed]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Locked]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Event]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Rewards]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Activity Check]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Sign Ups]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Announcement]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[News]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Update]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Gifts]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Rolls]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Shop]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Market]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Trade]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Board]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Claims]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Info]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Tips]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Turf Details]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Navy Branch]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Rolls]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Shop]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Board]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Claims]", "#fff", invisible));

        // Deprecated
        TOPIC_PREFIXES.push(new Array("[Equipment]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Fighting Style]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Ship]", "#fff", invisible));
        TOPIC_PREFIXES.push(new Array("[Companions]", "#fff", invisible));

        var add_style_topic_links = true;
        /*** END EDITABLE ZONE ***/

        if (/^\/post/.test($(location).attr('pathname') + $(location).attr('search')) && $('.submit-buttons input[value="newtopic"]').length) {
            var html_options_prefix = "<select name='prefixes'><option value='' style='background:COLOR'>Topic Type...</option>";
            for (var prefix in TOPIC_PREFIXES) {
                if (TOPIC_PREFIXES[prefix][2] == visible) {
                    html_options_prefix += "<option value='" + TOPIC_PREFIXES[prefix][0] + "' style='background:" + TOPIC_PREFIXES[prefix][1] + "'>" + TOPIC_PREFIXES[prefix][0] + "</option>";
                }
            }
            html_options_prefix += "</select>";
            $('input[name="subject"]').before(html_options_prefix);
            $("form[method='post']").submit(function () {
                $('input[name="subject"]').val(($('select[name="prefixes"]').val() ? $('select[name="prefixes"]').val() + " " : "") + $('input[name="subject"]').val())
            });
        }

        if (add_style_topic_links == true) {
            $('a').each(function () {
                for (var prefix in TOPIC_PREFIXES) {
                    var pref = TOPIC_PREFIXES[prefix][0].replace("[", "").replace("]", "").replace(" ", "-").toLowerCase();
                    //var preg = new RegExp("^\/t\\d+(p\\d+)?\\-" + pref);
                    var preg = new RegExp(pref);
                    if (preg.test($(this).attr('href'))) {
                        var pre1 = new RegExp("\\[" + TOPIC_PREFIXES[prefix][0].replace("[", "").replace("]", "") + "\\]");
                        $(this).html($(this).html().replace(pre1, "<span class='title_prefix title_prefix-" + pref + "'>" + TOPIC_PREFIXES[prefix][0].replace("[", "").replace("]", "") + "</span>"));
                    }
                }
            });
        }
    }
    /*****************************************************************/

    /**TIMELINE LINKS***************************************************************/
    function SetUpTimeLineEventListners() {
        $(".fake-anchor").click(function () {
            var link = $(this).attr("data-href");
            if (link != "" && link != undefined) {
                window.open(link);
            }
        });
        $(".fake-anchor a").click(function (event) {
            event.stopPropagation();
        });
    }
    /*****************************************************************/

    /**INLINE SPOILERS*******************************************************************************/
    function SetUpInlineSpoilers() {
        $(".inlinespoiler").click(function (event) {
            if ($(this).hasClass("inlinespoiler-hidden")) {
                $(this).removeClass("inlinespoiler-hidden");
            }
            else {
                $(this).addClass("inlinespoiler-hidden");
            }
            event.stopPropagation();
        });
    }
    /*****************************************************************/

    /**ENABLE Popper.js/Bootstrap TOOLTIPS******************************************************/
    function SetUpTooltips() {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, { boundary: document.body }));
    }

    /*****************************************************************************************/

    /**CKEDITOR***************************************************************************************/
    /*
    *  NOT USING THIS RIGHT NOW.
    */
    function SubstituteEditor() {
        if (!$.sceditor) return;
        $.ajax({
            type: 'GET',
            url: 'https://cdn.ckeditor.com/4.9.2/standard/ckeditor.js',
            dataType: 'script',
            success: function () {
                CKEDITOR.replace('text_editor_textarea');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 500) {
                    console.log('Internal error: ' + jqXHR.responseText);
                } else {
                    console.log('Unexpected error.');
                }
            }
        });
        $(function () {
            $('#text_editor_textarea').sceditor('instance').destroy();
        });
    }

    /*****************************************************************************************/

    /**ASSESSMENT FRAMEWORK*******************************************************************/
    function SetUpAssessmentFramework() {
        $('.detailed-assessment-quote').click(function () {
            $('#assessment-comment-selected').html(``);
            $('#assessment-quote-selected').html(``);
            if ($(this).has('.assessment-comment').length) {
                $('#assessment-quote-selected').html($(this).html());
                $('#assessment-comment-selected').html($(this).children('.assessment-comment').first().html());
            }
            else {
                $('#assessment-quote-selected').html($(this).html());
                $('#assessment-comment-selected').html(`No detailed comments were provided.`);
            }
        });
        SetUpAssessmentFrameworkEditorButtons();
    }
    // NOT WORKING YET.
    function SetUpAssessmentFrameworkEditorButtons() {
        try {
            const assessorAccounts =
                [
                    1, // Dadmin
                    2, // Gray
                    4, // Acacia
                    21, // Francis
                    94, // Butch
                    95, // Loha
                ];
            if (assessorAccounts.includes(_userdata.user_id)) {

                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.has('mode')) {
                    if (urlParams.get('mode') == 'editpost') {

                        let sceditorButtonAssText = $('<div></div>').text('Detailed Assessment Comment');
                        let sceditorAssButton = $('<a></a>').addClass('sceditor-button sceditor-button-ass').attr('title', 'Assessment Comment').append(sceditorButtonAssText);

                        let sceditorButtonDassText = $('<div></div>').text('Detailed Assessment Comment');
                        let sceditorDassButton = $('<a></a>').addClass('sceditor-button sceditor-button-dass').attr('title', 'Detailed Assessment Comment').append(sceditorButtonDassText);

                        let sceditorGroup = $('<div></div>').addClass('sceditor-group').append(sceditorAssButton).append(sceditorDassButton);

                        $('.sceditor-toolbar').append(sceditorGroup);


                        $('.sceditor-button-ass, .sceditor-button-dass').click(function (e) {
                            e.preventDefault();
                            let txtArea = $('#text_editor_textarea');
                            updateEditorVal(txtArea.text());
                            let txtAreaGhost = $('#textarea_content .sceditor-container textarea')[0];
                            let start = txtAreaGhost.selectionStart;
                            let end = txtAreaGhost.selectionEnd;
                            if (start >= 0 && end > start) {
                                const prefixStr = txtArea.text().substring(0, start);
                                const suffixStr = txtArea.text().substring(end, txtArea.text().length);
                                const selectedStr = txtArea.text().substring(start, end);
                                let cursorPosition = 0;
                                let newText = `${prefixStr}[dass]${selectedStr}[cmt][/cmt][/dass]${suffixStr}`;

                                if ($(this).hasClass('sceditor-button-dass')) {
                                    newText = `${prefixStr}[dass]${selectedStr}[cmt][/cmt][/dass]${suffixStr}`;
                                    cursorPosition = end + 11;
                                } else {
                                    newText = `${prefixStr}[ass=]${selectedStr}[/ass]${suffixStr}`;
                                    cursorPosition = start + 5;
                                }
                                txtArea.text(newText);
                                updateEditorVal(newText);

                                txtAreaGhost.focus();
                                txtAreaGhost.selectionEnd = cursorPosition;
                            }
                        });
                    }
                }

            }
        } catch (err) {
            console.log(`Caught an error while setting up assessment framework editor buttons.`);
            console.log(err);
        }

    }


    /**ASSESSMENT ICONS***************************************************/
    function SetUpAssessmentIcons() {
        // If a post has assessment comments, make the assessment icon visible in the post head.
        $('.post').each(function () {
            if ($(this).find('.assessment-quote').length) {
                $(this).find('.ico-assessment').removeClass('d-none');
            }
        });
        $('.spoiler').each(function () {
            if ($(this).find('.assessment-quote').length) {
                var spoilerDD = '<span class="ico-assessment" data-bs-toggle="tooltip" title="This spoiler has in-line assessment comments. Expand it to find the mark-up."><img class="ico-assessment-img" src="https://i.servimg.com/u/f60/18/75/26/17/clipbo10.png" alt="This spoiler has in-line assessment comments. Expand it to find the mark-up."></span>' + $(this).children('dd').html();

                $(this).children('dd').html(spoilerDD);

            }
        });
    }
    /*************************************************************************************/
    /**********************************************************************************************/
    /**POPULATE CHARACTER AGES*****************************************/
    function getAge(date) {
        //CURRENTDATE
        var today = new Date('1829-04-01'); // Change this to current date.
        var birthDate = new Date(date);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    function PopulateCharacterAges() {
        $('.character-current-age').each(function () {
            $(this).text(getAge($(this).attr('data-rd-birthdate')));
        });
    }
    /*****************************************************************/
    /*****************************************************************/
    /*****************************************************************/
});

/*=======================================================================================================================
=========================================================================================================================
=========================================================================================================================
=========================================================================================================================
=========================================================================================================================*/

/**SAVE WORK IN PROGRESS POSTS***************************************************************/
window.localStorage && $(function () {
    $(function () {
        if ($("#text_editor_textarea").length && typeof $.sceditor != "undefined") {
            var a = $(document.post.mode).val(),
                d = $("#text_editor_textarea").sceditor("instance"),
                e, f, g = function () {
                    localStorage.setItem(a, d.val());
                    f = 0
                },
                b = JSON.parse(localStorage.getItem("br-data")) || [],
                c;
            switch (a) {
                case "editpost":
                    return;
                case "reply":
                    a += $(document.post.t).val();
                    break;
                case "newtopic":
                    a += $(document.post.f).val()
            }
            a = parseInt((my_getcookie("fa_" + location.hostname.replace(/\./g, "_") + "_data") || "0").replace(/.*s:6:"userid";(i:([0-9]+)|s:[0-9]+:"([0-9]+)");.*/, "$2$3")) + a; -
                1 != (c = $.inArray(a, b)) && b.splice(c, 1);
            if (20 < b.length) {
                for (c = b.length - 1; 0 <= c; c--) /^\s*$/.test(localStorage.getItem(b[c]) || "") && (localStorage.removeItem(b[c]),
                    b.splice(c, 1));
                20 < b.length && (localStorage.removeItem(b[0]),
                    b.splice(0, 1))
            }
            b.push(a);
            localStorage.setItem("br-data", JSON.stringify(b));
            $(document.post).submit(function () {
                localStorage.setItem("br-target", a)
            });
            !d.val() && ((e = localStorage.getItem(a)) && d.val(e));
            d.keyUp(function () {
                f || (f = setTimeout(g, 3E3))
            })
        }
    })
});
window.localStorage && (localStorage.getItem("br-target") && function () {
    $("meta[http-equiv='refresh'][content]:first").length && function () {
        var a = JSON.parse(localStorage.getItem("br-data")),
            b = localStorage.getItem("br-target"),
            c;
        if (-1 != (c = $.inArray(b, a))) a.splice(c, 1),
            localStorage.setItem("br-data", JSON.stringify(a));
        localStorage.removeItem(b)
    }();
    localStorage.removeItem("br-target")
}());
