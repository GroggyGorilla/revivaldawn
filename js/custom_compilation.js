$(function () { 

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
                    bottompos =  $(linkloc).offset().top - $(window).height() + $(linkloc).outerHeight(true);
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
    if ($('.img-modal').length > 0) {
        $(document).on('click', '.img-modal', function () {
            $("#img-modal-overlay").css('display', 'block');
            $("#img-modal-expanded").prop('src', $(this).prop('src'));
            $("#img-modal-expanded").attr('alt', $(this).attr('alt'));
            $("#img-modal-caption").text($(this).attr('alt'));
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
    
    $('.postbody').each(function () {
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
      	'freedomoftravel'
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
      	'https://i.servimg.com/u/f60/18/75/26/17/freedo11.png'
    ];

    var tooltipText = [
        'Jerry Rigger: +25% Hull for 2 rounds',
        'Wind Caller: +25% Sails for 2 rounds',
        'Barrel Crazed: +25% Cannons for 2 rounds',
        'Hammerhanded: One equipment repair per thread',
        'Master Chef: Up to 3 allies can start combat with 110% HP',
        'Dulcet Virtuoso: +10% to ATK or RX for 3 allies for 3 rounds',
        'Nautical Almanac: +2 to ship combat escape roll value',
        'Walking, Talking First Aid Kit: Revive and UT Heals',
        'Ship Bringer: One ship repair per thread',
        'Punchout Guru: +0.20 EXP Bonus to all allies in a quest',
        'Berry Printer: +0.20 Income Bonus to all allies in a quest',
        'Hard-boiled: +15 stats',
        'Child of Destiny: +25 stats',
        'Dreams Never Die: Resist knockout once per thread',
        'Freak of Nature: Stat buffs at low health',
        'Jurassic Bark: Ancient zoan eater',
        'Untouchable: Logia user',
        'Dragonheart: Mythical zoan eater',
        'Bookworm: Poneglyph literate',
        'Bane of the Weak: Haoshoku user',
        'Devil&#8217;s Advocate: +100 stats',
        'Strolling Death: +200 stats',
        'The Chosen One: Inherited the Will of D',
        'Rise and Shine: Awakening/Mastery Unlocked',
        'Haki Specialization: Kenbunshoku',
        'Haki Specialization: Busoshoku',
        'Haki Specialization: Haoshoku',
        'Haki Ascendancy: Kenbunshoku',
        'Haki Ascendancy: Busoshoku',
        'Haki Ascendancy: Haoshoku',
        'One-Needle Log Pose: Travel across Paradise',
        'Three-Needle Log Pose: Travel across the New World',
        'Mythical Zoan Fruit',
        'Logia Fruit',
        'Ancient Zoan Fruit',
        'Steel Bracing: +25% Hull for 2 rounds',
        'Cola Engine: +25% Sails for 2 rounds',
        'Chain Cannons: +25% Cannons for 2 rounds',
        'Sea Prism Stone Keel: Sail through Calm Belt',
        'Submarine (Toggle): +25% Sails, -25% Cannons',
        'Blimp (Toggle): +25% Cannons, -25% Hull',
        'Treasure Tree Adam Wood: +200 Hull',
        'Tier 1 Equipment: +5 ATK',
        'Tier 2 Equipment: +10 ATK',
        'Tier 3 Equipment: +15 ATK',
        'Tier 4 Equipment: +20 ATK',
        'Tier 5 Equipment: +30 ATK',
        'Tier 6 Equipment: +50 ATK',
        'Tier 4 Equipment: +20 ATK (Devil Fruit Fed)',
        'Tier 5 Equipment: +30 ATK (Devil Fruit Fed)',
        'Tier 6 Equipment: +50 ATK (Devil Fruit Fed)',
        'Tier 4 Equipment: +20 ATK (Sea Prism Stone Tipped)',
        'Tier 5 Equipment: +30 ATK (Sea Prism Stone Tipped)',
        'Tier 6 Equipment: +50 ATK (Sea Prism Stone Tipped)',
        'Tier 1 Equipment: +5 ATK (Broken)',
        'Tier 2 Equipment: +10 ATK (Broken)',
        'Tier 3 Equipment: +15 ATK (Broken)',
        'Tier 4 Equipment: +20 ATK (Broken)',
        'Tier 5 Equipment: +30 ATK (Broken)',
        'Tier 4 Equipment: +20 ATK (Devil Fruit Fed) (Broken)',
        'Tier 5 Equipment: +30 ATK (Devil Fruit Fed) (Broken)',
        'Tier 4 Equipment: +20 ATK (Sea Prism Stone Tipped) (Broken)',
        'Tier 5 Equipment: +30 ATK (Sea Prism Stone Tipped) (Broken)',
        'Tier 1 Equipment: +5 DEF',
        'Tier 2 Equipment: +10 DEF',
        'Tier 3 Equipment: +15 DEF',
        'Tier 4 Equipment: +20 DEF',
        'Tier 5 Equipment: +30 DEF',
        'Tier 6 Equipment: +50 DEF',
        'Tier 4 Equipment: +20 DEF (Devil Fruit Fed)',
        'Tier 5 Equipment: +30 DEF (Devil Fruit Fed)',
        'Tier 6 Equipment: +50 DEF (Devil Fruit Fed)',
        'Tier 4 Equipment: +20 DEF (Sea Prism Stone Tipped)',
        'Tier 5 Equipment: +30 DEF (Sea Prism Stone Tipped)',
        'Tier 6 Equipment: +50 DEF (Sea Prism Stone Tipped)',
        'Tier 1 Equipment: +5 DEF (Broken)',
        'Tier 2 Equipment: +10 DEF (Broken)',
        'Tier 3 Equipment: +15 DEF (Broken)',
        'Tier 4 Equipment: +20 DEF (Broken)',
        'Tier 5 Equipment: +30 DEF (Broken)',
        'Tier 4 Equipment: +20 DEF (Devil Fruit Fed) (Broken)',
        'Tier 5 Equipment: +30 DEF (Devil Fruit Fed) (Broken)',
        'Tier 4 Equipment: +20 DEF (Sea Prism Stone Tipped) (Broken)',
        'Tier 5 Equipment: +30 DEF (Sea Prism Stone Tipped) (Broken)',
        'Tier 1 Equipment: +5 RX',
        'Tier 2 Equipment: +10 RX',
        'Tier 3 Equipment: +15 RX',
        'Tier 4 Equipment: +20 RX',
        'Tier 5 Equipment: +30 RX',
        'Tier 6 Equipment: +50 RX',
        'Tier 4 Equipment: +20 RX (Devil Fruit Fed)',
        'Tier 5 Equipment: +30 RX (Devil Fruit Fed)',
        'Tier 6 Equipment: +50 RX (Devil Fruit Fed)',
        'Tier 4 Equipment: +20 RX (Sea Prism Stone Tipped)',
        'Tier 5 Equipment: +30 RX (Sea Prism Stone Tipped)',
        'Tier 6 Equipment: +50 RX (Sea Prism Stone Tipped)',
        'Tier 1 Equipment: +5 RX (Broken)',
        'Tier 2 Equipment: +10 RX (Broken)',
        'Tier 3 Equipment: +15 RX (Broken)',
        'Tier 4 Equipment: +20 RX (Broken)',
        'Tier 5 Equipment: +30 RX (Broken)',
        'Tier 4 Equipment: +20 RX (Devil Fruit Fed) (Broken)',
        'Tier 5 Equipment: +30 RX (Devil Fruit Fed) (Broken)',
        'Tier 4 Equipment: +20 RX (Sea Prism Stone Tipped) (Broken)',
        'Tier 5 Equipment: +30 RX (Sea Prism Stone Tipped) (Broken)',
        'Tier 1 Equipment: +5 WP',
        'Tier 2 Equipment: +10 WP',
        'Tier 3 Equipment: +15 WP',
        'Tier 4 Equipment: +20 WP',
        'Tier 5 Equipment: +30 WP',
        'Tier 6 Equipment: +50 WP',
        'Tier 4 Equipment: +20 WP (Devil Fruit Fed)',
        'Tier 5 Equipment: +30 WP (Devil Fruit Fed)',
        'Tier 6 Equipment: +50 WP (Devil Fruit Fed)',
        'Tier 4 Equipment: +20 WP (Sea Prism Stone Tipped)',
        'Tier 5 Equipment: +30 WP (Sea Prism Stone Tipped)',
        'Tier 6 Equipment: +50 WP (Sea Prism Stone Tipped)',
        'Tier 1 Equipment: +5 WP (Broken)',
        'Tier 2 Equipment: +10 WP (Broken)',
        'Tier 3 Equipment: +15 WP (Broken)',
        'Tier 4 Equipment: +20 WP (Broken)',
        'Tier 5 Equipment: +30 WP (Broken)',
        'Tier 4 Equipment: +20 WP (Devil Fruit Fed) (Broken)',
        'Tier 5 Equipment: +30 WP (Devil Fruit Fed) (Broken)',
        'Tier 4 Equipment: +20 WP (Sea Prism Stone Tipped) (Broken)',
        'Tier 5 Equipment: +30 WP (Sea Prism Stone Tipped) (Broken)',
        'Tier 6 Equipment: +50 ATK (Broken)',
        'Tier 6 Equipment: +50 ATK (Sea Prism Stone Tipped) (Broken)',
        'Tier 6 Equipment: +50 ATK (Devil Fruit Fed) (Broken)',
        'Tier 6 Equipment: +50 DEF (Broken)',
        'Tier 6 Equipment: +50 DEF (Sea Prism Stone Tipped) (Broken)',
        'Tier 6 Equipment: +50 DEF (Devil Fruit Fed) (Broken)',
        'Tier 6 Equipment: +50 RX (Broken)',
        'Tier 6 Equipment: +50 RX (Sea Prism Stone Tipped) (Broken)',
        'Tier 6 Equipment: +50 RX (Devil Fruit Fed) (Broken)',
        'Tier 6 Equipment: +50 WP (Broken)',
        'Tier 6 Equipment: +50 WP (Sea Prism Stone Tipped) (Broken)',
        'Tier 6 Equipment: +50 WP (Devil Fruit Fed) (Broken)',
        'Screw You, RNGesus: Do a combat re-roll',
        'Tactical Retreat: Escape without a roll',
        'Under The Radar: Freeze bounty',
        'Identity Theft: Counter information metagame',
        'Social Distancing: Reduce quest player requirement',
        'Land Crawler (Toggle): +25% Hull, -25% Sails',
      	'Skin Of Your Teeth: Downgrade first crit to solid hit',
      	'Freedom Of Travel: Bypass sea restrictions for a new quest'
    ];
    $('.postbody, .field_uneditable, .postprofile, .message-text').each(function () {
        var oldhtml = "";
        oldhtml = $(this).html();
        for (var i = 0; i < iconBB.length; i++) {
            var iconBBCode = '[[' + iconBB[i] + ']]';
            var iconBBCode = iconBBCode.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            var iconBBRegExp = new RegExp(iconBBCode, 'g');
            oldhtml = oldhtml.replace(iconBBRegExp, '<a class="icon-link" data-tooltip="' + tooltipText[i] + '"><img src="' + iconImage[i] + '"  class="icon-image" /></a> ');
        };
        $(this).html(oldhtml);
    });
    iconBB = null;
    iconImage = null;
    tooltipText = null;

    /*****************************************************************/

    /**CODE BOX SELECT ALL******************************************************/

    $("dl.codebox:not(.spoiler,.hidecode)  > dd.code, dl.codebox:not(.spoiler,.hidecode)  > dd > code").closest("dl").find('dt')
        .append('<a class="selectCode" data-tooltip="Select Code"><img class="selectCodeImg" src="https://i.servimg.com/u/f60/18/75/26/17/select10.png" /></a>');

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
    var links = $('a[href^="/u"]').filter(function () {
            if (this.firstChild && this.firstChild.tagName) {
                if (this.firstChild.tagName != 'IMG') {
                    return this;
                }
            } else {
                return this;
            }
        }),

        usersinfo = {};

    links.tooltipster && links.not('.mentiontag, .tooltipstered').filter(function () {
        if (!$(this).closest('#tabs')[0]) {
            return this;
        }
    }).tooltipster({
        animation: 'fade',
        interactive: true,
        contentAsHTML: true,
        minWidth: 300,
        maxWidth: 300,
        delay: 500,
        arrowColor: "#EEE",
        autoClose: true,
        content: 'Loading...',
        functionBefore: function (origin, continueTooltip) {
            continueTooltip();

            var userid = $(this).attr('href').replace(/.*?\/u(\d+).*/, '$1');
            if (origin.data('ajax') !== 'cached') {
                if (usersinfo[userid] != undefined) {
                    origin.tooltipster('content', usersinfo[userid]).data('ajax', 'cached');
                } else {
                    $.ajax({
                        type: 'GET',
                        url: "/ajax/index.php",
                        dataType: "html",

                        data: {
                            f: "m",
                            user_id: userid
                        },

                        success: function (html) {
                            usersinfo[userid] = html;
                            origin.tooltipster('content', html).data('ajax', 'cached');
                        }
                    });
                }
            }
        }
    });
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
        initialize: function() {
            $(function() {
                BBParser.setupBBParser();
            });
        },
        add: [
            /*
            * Note: Add a comma at the end of each new entry
            * '{option}' corresponds to the optional tag title, and '{content}' correspond to the text between the tags
            */
            {
                tag: 'ber', // berries
                close: false,
                defaultOption: 'g', // option 'b' for black icon and 'r' for red icon
                replacement: '<span class="ico-b-{option}" data-tooltip="Berries"></span>'
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
                defaultOption: 'Please see assessment comment(s) below.',
                replacement: '<div class="notice notice-warn"><h5>{option}</h5><div>{content}</div></div>'
            },
            {
                tag: 'warned',
                close: false,
                defaultOption: 'Please see in-line assessment comment(s) below.',
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
                replacement: '<span class="assessment-quote" data-tooltip="{option}">{content}</span>'
            },
            {
                tag: 'dass', // detailed assessment
                close: true,
                defaultOption: 'Click to view comment(s).',
                replacement: '<span class="assessment-quote detailed-assessment-quote" data-tooltip="{option}" data-bs-toggle="modal" data-bs-target="#assessment-modal">{content}</span>'
            },
            {
                tag: 'cmt', // detailed assessment comments
                close: true,
                replacement: `<span class="assessment-comment">{content}</span>`
            },
            {
                tag: 'tracker', // tracker link
                close: false,
                replacement: '<a href="{option}" class="tracker-link">Tracker</a>'
            },
            {
                tag: 'turf', // turf details link
                close: true,
                replacement: '<a href="{option}"><span class="title_prefix title_prefix-turf-details">{content}</span></a>'
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
                tag: 'guest',
                close: true,
                replacement: '<div class="guest">{content}</div>',
                replace: function(option, content) {
                    if (_userdata.session_logged_in < 1) {
                        return 'You need to be logged in to view this content';
                    }
                    return content;
                }
            }

            // Note: Do not add a comma at the end of the last entry
        ],
        // Do not change anything down
        validateTag: function(a) {
            if (!/^\w+$/.test(a)) throw new RangeError("You added an invalid tag: " + a);
        },
        replacers: function(a, b, c) {
            return (a || "").replace(/{option}/g, b || "").replace(/{content}/g, c || "");
        },
        optionReg: /.*?=("|'|)(.*?)\1\]/,
        parsedContent: function(a, b, c) {
            return a.replace(c ? RegExp("(\\[" + b.tag + "[^\\]]*\\])([\\s\\S]*?)\\[/" + b.tag + "]", "g" + (b.insensitive ? "i" : "")) : RegExp("\\[" + b.tag + "[^\\]]*\\]", "g" + (b.insensitive ? "i" : "")), function(d, e, f) {
                c || (e = d);
                e = BBParser.optionReg.test(e) ? e.replace(BBParser.optionReg, "$2") : b.defaultOption;
                if("undefined" !== typeof b.replace) {
                    d = c ? b.replace(e, f) : b.replace(e);
                    "string" === typeof d ? c ? f = d : e = d : d;
                    "object" === typeof d && (e = d.option || e, f = d.content || f);
                }
                return BBParser.replacers(b.replacement, e, f);
            });
        },
        setupBBParser: function() {
            var postBody = $(".postbody, .blog_message, .postprofile-info, .field_uneditable, .message-text");
            for (var i = 0, e;(e = postBody[i++]);) {
                for (var j in BBParser.add) {
                    var item = BBParser.add[j];
                    // Validating tag
                    BBParser.validateTag(item.tag);
                    e.innerHTML = BBParser.parsedContent(e.innerHTML, item, item.close);
                }
            }
            /**Set up event handlers*******************************/
            // Assessment framework
            $('.detailed-assessment-quote').click(function() {
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

            // If a post has assessment comments, make the assessment icon visible in the post head.
            $('.post').each(function() {
                if ($(this).find('.assessment-quote').length) {
                    $(this).find('.ico-assessment').removeClass('d-none');
                }
            });
            SetUpTimeLineEventListners();

        }
    };
    BBParser.initialize();
    /**************************************************/
    /**TOPIC TAGS/PREFIXES***************************************************************/ 
    var TOPIC_PREFIXES = [];
    var invisible = 0;
    var visible = 1;
    /**** BEGIN EDITABLE ZONE ***/
    TOPIC_PREFIXES.push(new Array("[Episode]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Arc]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Saga]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[World Event]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Bio]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Equipment]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Fighting Style]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Tracker]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Ship]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Crew]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Companions]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Alliance]", "#fff", visible));
    TOPIC_PREFIXES.push(new Array("[Advertisement]", "#fff", visible));

    TOPIC_PREFIXES.push(new Array("[Closed]", "#fff", invisible));
    TOPIC_PREFIXES.push(new Array("[Locked]", "#fff", invisible));
    TOPIC_PREFIXES.push(new Array("[Event]", "#fff", invisible));
    TOPIC_PREFIXES.push(new Array("[Rewards]", "#fff", invisible));
    TOPIC_PREFIXES.push(new Array("[Activity Check]", "#fff", invisible));
    TOPIC_PREFIXES.push(new Array("[Sign Ups]", "#fff", invisible));
    TOPIC_PREFIXES.push(new Array("[Announcement]", "#fff", invisible));
    TOPIC_PREFIXES.push(new Array("[Update]", "#fff", invisible));
    TOPIC_PREFIXES.push(new Array("[Gifts]", "#fff", invisible));
    TOPIC_PREFIXES.push(new Array("[Tips]", "#fff", invisible));
    TOPIC_PREFIXES.push(new Array("[Turf Details]", "#fff", invisible));

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
        $("form[method='post']").submit(function() {
            $('input[name="subject"]').val(($('select[name="prefixes"]').val() ? $('select[name="prefixes"]').val() + " " : "") + $('input[name="subject"]').val())
        });
    }

    if (add_style_topic_links == true) {
        $('a').each(function() {
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
    /*****************************************************************/
    function SetUpTimeLineEventListners() {
        /**TIMELINE LINKS***************************************************************/
        $(".fake-anchor").click(function () {
            var link = $(this).attr("data-href");
            if (link != "" && link != undefined) {
                window.open(link);
            }
        });
        $(".fake-anchor a").click(function (event) {
            event.stopPropagation();
        });
        /*****************************************************************/

        /**INLINE SPOILERS***************************************************************/
        $(".inlinespoiler").click(function (event) {
            if ($(this).hasClass("inlinespoiler-hidden")) {
                $(this).removeClass("inlinespoiler-hidden");
            }
            else {
                $(this).addClass("inlinespoiler-hidden");
            }
            event.stopPropagation();
        });
        /*****************************************************************/
    }
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