$(function () {

    /**STICKY WIDGETS***************************************************************/
    /*if (!jQuery.browser.mobile) {
        $("#right").stick_in_parent();
        $("#left").stick_in_parent();

    }*/

    /*****************************************************************/


/**PERK ICONS***************************************************************/
    var perkBB = [        
        'jerryrigger',
        'windcaller',
        'barrelcrazed',
        'hammerhanded',
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
        'strollingdeath'
    ];
    var perkImage = [        
        'https://i.servimg.com/u/f60/18/75/26/17/jerryr10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/windca10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/barrel10.png',
        'https://i.servimg.com/u/f60/18/75/26/17/hammer10.png',
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
        'https://i.servimg.com/u/f60/18/75/26/17/stroll10.png'
    ];

    var tooltipText = [        
        'Jerry Rigger: +25% Hull for 5 turns',
        'Wind Caller: +25% Sails for 5 turns',
        'Barrel Crazed: +25% Cannons for 5 turns',
        'Hammerhanded: One equipment repair per thread',
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
        'Strolling Death: +200 stats'
    ];
    $('.postbody, .field_uneditable, .postprofile').each(function () {
        var oldhtml = "";
        oldhtml = $(this).html();
        for (var i = 0; i < perkBB.length; i++) {
            var perkBBCode = '[[' + perkBB[i] + ']]';
            var perkBBCode = perkBBCode.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            var perkBBRegExp = new RegExp(perkBBCode, 'g');
            oldhtml = oldhtml.replace(perkBBRegExp, '<a class="perk-icon-link" data-tooltip="' + tooltipText[i] + '"><img src="' + perkImage[i] + '"  class="perk-icon" /></a> ');
        };
        $(this).html(oldhtml);
    });

    /*****************************************************************/


    /**NEWS COO***************************************************************/
    $("#newsareal1").load("/f2-history-and-lore div.topictitle:lt(10)");
    /*****************************************************************/


    /**TRACKER***************************************************************/
    /*'Personal Title - Give yourself your own personal title !';
    'DEVELOPED BY ANGE TUTEUR';
    'NO DISTRIBUTION WITHOUT CONSENT OF THE AUTHOR';
    'ORIGIN : http://fmdesign.forumotion.com/t413-personal-rank-titles#3302';

    var formatBBCode = true;

    // editing of profile field
    if (/\/profile|\/u\d+/.test(window.location.href)) {
        for (var a = document.getElementsByTagName('TEXTAREA'), i = 0, j = a.length; i < j; i++) {
            if (/id="tracFld"/.test(a[i].value) && /profile_field/.test(a[i].id)) {
                a[i].onfocus = function () {
                    this.value = this.value.replace(/\n|\r/g, '').replace(/\[table id="tracFld"\]\[tr\]\[td\](.*?)\[\/td\]\[\/tr\]\[\/table\]/, '$1');
                };

                a[i].onblur = function () {
                    this.value = '[table id="tracFld"][tr][td]' + this.value + '[/td][/tr][/table]';
                };
            }
        }
    }

    // parsing in messages
    else if (/\/t\d+/.test(window.location.href)) {
        var version = $('.bodylinewidth')[0] ? 0 : document.getElementById('phpbb') ? 1 : $('div.pun')[0] ? 2 : document.getElementById('ipbwrapper') ? 3 : document.getElementById('modernbb') ? 4 : document.getElementById('fa_edge') ? 5 : 'badapple',
            closest = ['.poster-profile', '.postprofile', '.user', '.postdetails', '.postprofile', '.postprofile'][version],
            find = ['br:first', 'dt + dd', '.user-basic-info', 'dt + dd', '.postprofile-rank', '.rank-title'][version],

            a = $('.fa_personal_title'),
            i = 0,
            j = a.length,
            node, str, title;

        if (version == 'badapple') {
            if (window.console && console.warn) console.warn('Your forum version is not supported for the "Personal Title" plugin.');
            return;
        }

        for (; i < j; i++) {
            title = $('td', a[i]).eq(0);
            title = formatBBCode ? title.html() : title.text();
            if (title) {
                node = $(a[i]).closest(closest).find(find);
                str = '<span id="tracFld">' + title + '</span>';

                version == 0 ? node.before(str) : node.append(str);

                a[i].style.display = 'none';
            }
        }
    }*/
    /*$(".postdetails a img").on("mouseover", function () {
        $(this).closest(".postdetails").find("#tracFld").show();
    }).on("mouseout", function () {
        $(this).closest(".postdetails").find("#tracFld").hide();
    });

    $("#tracFld").on("mouseover", function () {
        $(this).show();
    }).on("mouseout", function () {
        $(this).hide();
    });*/
    /*****************************************************************/


    /**COLOR PICKER***************************************************************/
    if ($('#text_editor_textarea').length) {
        $.getScript("https://aska.123.st/17313.js");
    }
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


    /**CODE BOX SELECT ALL BUTTON***************************************************************/
    /*function selectCode(e) {
        var doc = document
            , text = $(e).closest("dl").find(".cont_code,code").get(0)
            , range, selection
            ;
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
    };
  $(function () {$("dl.codebox:not(.spoiler,.hidecode)  > dd.code, dl.codebox:not(.spoiler,.hidecode)  > dd > code")
    .closest("dl").find('dt').append('<span onClick="selectCode(this)" class="selectCode">Select Content</span>'); });*/
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




/*****************************************************************/

/*****************************************************************/
