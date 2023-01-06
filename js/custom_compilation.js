$(function () { 


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

    /**ENABLE Popper.js/Bootstrap TOOLTIPS******************************************************/
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {boundary:document.body}));

    /*********************************************************************/
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