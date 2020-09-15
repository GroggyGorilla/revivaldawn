$(function () {
    /**POPULATE PAGE QUICK LINKS**************************************/
    if ($('#rd_pagelinks').length) {
        if ($('[id^="rdql_"]').length) {
            var qlparents = [];
            $('[id^="rdql_"').each(function () {
                if ($(this).attr('data-qlseparator') != undefined && $(this).attr('data-qlseparator') != "") {
                    var qlitem = '<hr />';
                    $('#rd_pagelinks').append(qlitem);
                }
                else {
                    var qlhref = $(this).attr('id');
                    var qltext = $(this).attr('data-qltext').replace(/'/g, "&#39;");
                    var qlitem = '<li class="pure-menu-item"><a href="#' + qlhref
                        + '" class="pure-menu-link">' + qltext + '</a></li>';
                    var qlparent = $(this).attr('data-qlparent');
    
                    if (qlparent == undefined || qlparent == "") {
                        $('#rd_pagelinks').append(qlitem);
                    }
                    else {
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
                        }
                        else {
                            $('#' + qlparentID).append(qlitem);
                        }
                    }
                }

            });
        }
        else {
            $('#rd_pagelinks').html('<li class="pure-menu-item pure-menu-disabled">No quick links found on this page.</li>');
        }
    }

    var $rdql_root = $('html, body');
    $(document).on('click', 'a[href^="#rdql_"], a[href^="#rdqlp_"]', function (event) {
        event.preventDefault();
        if (!($(this).attr('href') == null || $(this).attr('href') == undefined)) {
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
            $("#img-modal-overlay").css('display', 'none');;
        });
        $('#img-modal-overlay').click(function () {
            if (this.id == 'img-modal-overlay') {
                $("#img-modal-overlay").css('display', 'none');;
            }
        });
        $(document).keyup(function (e) {
            if (e.key === "Escape") {
                $("#img-modal-overlay").css('display', 'none');;
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
        'treasuretreeadamwood'
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
        'https://i.servimg.com/u/f60/18/75/26/17/treasu10.png'
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
        'Treasure Tree Adam Wood: +200 Hull'
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
        var doc = document, text = $(this).closest("dl").find(".cont_code,code").get(0), range, selection;
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
            $('#text_editor_textarea').sceditor('instance').insertText('[font=' + $(this).attr('data-font') + ']', '[/font]'); $('.sceditor-font-picker').remove(); e.preventDefault()
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
                b = JSON.parse(localStorage.getItem("br-data")) || [], c;
            switch (a) {
                case "editpost": return;
                case "reply": a += $(document.post.t).val();
                    break;
                case "newtopic": a += $(document.post.f).val()
            }
            a = parseInt((my_getcookie("fa_" + location.hostname.replace(/\./g, "_") + "_data") || "0").replace(/.*s:6:"userid";(i:([0-9]+)|s:[0-9]+:"([0-9]+)");.*/, "$2$3")) + a;
            -1 != (c = $.inArray(a, b)) && b.splice(c, 1);
            if (20 < b.length) {
                for (c = b.length - 1; 0 <= c; c--)/^\s*$/.test(localStorage.getItem(b[c]) || "") && (localStorage.removeItem(b[c]),
                    b.splice(c, 1));
                20 < b.length && (localStorage.removeItem(b[0]),
                    b.splice(0, 1))
            } b.push(a);
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
            b = localStorage.getItem("br-target"), c;
        if (-1 != (c = $.inArray(b, a))) a.splice(c, 1),
            localStorage.setItem("br-data", JSON.stringify(a));
        localStorage.removeItem(b)
    }();
    localStorage.removeItem("br-target")
}());
/*****************************************************************/
