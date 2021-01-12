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
        if (!($(this).attr('href') == "null" || $(this).attr('href') == undefined)) {
            $rdql_root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 100
            }, 500);
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
        'landcrawler'
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
        'https://i.servimg.com/u/f60/18/75/26/17/ship_110.png'
    ];

    var tooltipText = [
        'Jerry Rigger: +25% Hull for 5 rounds',
        'Wind Caller: +25% Sails for 5 rounds',
        'Barrel Crazed: +25% Cannons for 5 rounds',
        'Hammerhanded: One equipment repair per thread',
        'Master Chef: Up to 3 allies can start combat with 110% HP',
        'Dulcet Virtuoso: +10% to ATK or RX for 3 allies for 3 rounds',
        'Nautical Almanac: +2 to ship combat escape roll value',
        'Walking, Talking First Aid Kit: Revive and UT Heals',
        'Ship Bringer: One ship repair per thread',
        'Punchout Guru: +10% EXP bonus to all allies in a quest',
        'Berry Printer: +20% Berries bonus to all allies in a quest',
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
        'One-Needle Log Pose: Travel across Paradise',
        'Three-Needle Log Pose: Travel across the New World',
        'Mythical Zoan Fruit',
        'Logia Fruit',
        'Ancient Zoan Fruit',
        'Steel Bracing: +25% Hull for 5 posts',
        'Cola Engine: +25% Sails for 5 posts',
        'Chain Cannons: +25% Cannons for 5 posts',
        'Sea Prism Stone Keel: Sail through Calm Belt',
        'Submarine (Toggle): +25% Sails, -25% Cannons',
        'Blimp (Toggle): +25% Sails, -25% Hull',
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
        'Land Crawler (Toggle): +25% Hull, -25% Sails'
    ];
    $('.postbody, .field_uneditable, .postprofile').each(function () {
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
        .append('<a class="selectCode" data-tooltip="Select Code"><img src="https://i.vgy.me/ebzm5i.png" /></a>');

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
        event.stopPropagation();
        if ($(this).hasClass("inlinespoiler-hidden")) {
            $(this).removeClass("inlinespoiler-hidden");
        }
        else {
            $(this).addClass("inlinespoiler-hidden");
        }
    });
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

    /*****************************************************************/


    /*****************************************************************/

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
/*****************************************************************/
