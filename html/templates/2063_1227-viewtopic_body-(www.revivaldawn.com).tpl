<!-- BEGIN switch_plus_menu -->
<script type="text/javascript">
	//<![CDATA[
	var multiquote_img_off = '{JS_MULTIQUOTE_IMG_OFF}', multiquote_img_on = '{JS_MULTIQUOTE_IMG_ON}';
</script>
<!-- END switch_plus_menu -->
<script type="text/javascript">

var hiddenMsgLabel = { visible:'{JS_HIDE_HIDDEN_MESSAGE}', hidden:'{JS_SHOW_HIDDEN_MESSAGE}' };
showHiddenMessage = function(id) {
    try {
        var regId = parseInt(id, 10);
        if( isNaN(regId) ) { regId = 0; }

        if( regId > 0) {
            $('.post--' + id).toggle(0, function() {
				if( $(this).is(":visible") ) {
					$('#hidden-title--' + id).html(hiddenMsgLabel.visible);
				} else {
					$('#hidden-title--' + id).html(hiddenMsgLabel.hidden);
				}
			});
        }
    } catch(e) { }

	return false;
};

//]]>
</script>

<!-- BEGIN switch_push_direct_send -->
<div id="push-answer" class="jqmWindow"></div>
<script src="{JQUERY_DIR}jqmodal/jqmodal.js" type="text/javascript"></script>
<script type="text/javascript">
	$(document).ready(function() {
		$('#push-answer').jqm({toTop: true});

		$('#push-bell').click(function () {
			return sendWebPush({TOPIC_ID});
		});
		function sendWebPush(tId){
			$.get("/ajax_push.php?topicID=" + tId ).done(showPushAnswer);
		}

		function showPushAnswer(data) {
			$('#push-answer').html(data).jqmShow();
			$('.jqmOverlay').bgiframe();
			$('#push-answer').bgiframe();
		}
	});
	//]]>
</script>
<!-- END switch_push_direct_send -->

<div class="sub-header">
	<div class="sub-header-info">
		<h1 class="page-title">
			<a href="{TOPIC_URL}">{TOPIC_TITLE}</a>
			<!-- BEGIN switch_push_direct_send -->&nbsp;<span id="push-bell" style="color:goldenrod;" title="{switch_push_direct_send.L_PUSH_SEND}" class="ion-android-notifications"></span><!-- END switch_push_direct_send -->
		</h1>
        {POSTERS_LIST}
		<div class="sub-header-path">
			<a class="nav" href="{U_INDEX}"><span>{L_INDEX}</span></a>
			{NAV_CAT_DESC}
		</div>
	</div>

	<div class="sub-header-buttons">
		<!-- BEGIN switch_user_authpost -->
			<a href="{U_POST_NEW_TOPIC}" rel="nofollow" {S_POST_NEW_TOPIC} title="{T_POST_NEW_TOPIC}" class="ion-{I_POST_NEW_TOPIC} button1">{L_POST_NEW_TOPIC}</a>
		<!-- END switch_user_authpost -->
		<!-- BEGIN switch_user_authreply -->
			<a href="{U_POST_REPLY_TOPIC}" {S_POST_REPLY_TOPIC} title="{T_POST_REPLY_TOPIC}" class="ion-{I_POST_REPLY_TOPIC} button1">{L_POST_REPLY_TOPIC}</a>
		<!-- END switch_user_authreply -->
	</div>
</div>

<div class="topic-actions">
	<!-- BEGIN topicpagination -->
		<div class="pagination">
			{PAGINATION}
		</div>
	<!-- END topicpagination -->
	<div class="topic-actions-buttons">
		<!-- BEGIN switch_twitter_btn -->
		<span>
			<a href="https://twitter.com/share" class="twitter-share-button" data-via="{TWITTER}">Tweet</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
		</span>
		<!-- END switch_twitter_btn -->

		<!-- BEGIN switch_fb_likebtn -->
		<script>(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "https://connect.facebook.net/{LANGUAGE}/all.js#xfbml=1";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>
		<span class="fb-like" data-href="{FORUM_URL}{TOPIC_URL}" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></span>
		<!-- END switch_fb_likebtn -->

		<!-- BEGIN switch_plus_menu -->
		<div id="addthis-toolbar" style="display: inline-block; margin-bottom:5px;">
			<div class="btn-floating-left" tabindex="100">
                {L_SHARE}
			</div>
			<div class="addthis-toolbar-btn" style="display:none;">
                {switch_plus_menu.SOCIAL_BUTTONS}
			</div>
		</div>
        {switch_plus_menu.JS_SOCIAL_BUTTONS}
		<script type="text/javascript">//<![CDATA[

			var url_favourite = '{U_FAVOURITE_JS_PLUS_MENU}';
			var url_newposts = '{U_NEWPOSTS_JS_PLUS_MENU}';
			var url_egosearch = '{U_EGOSEARCH_JS_PLUS_MENU}';
			var url_unanswered = '{U_UNANSWERED_JS_PLUS_MENU}';
			var url_watchsearch = '{U_WATCHSEARCH_JS_PLUS_MENU}';
			insert_plus_menu_new('f{FORUM_ID}&amp;t={TOPIC_ID}','{JS_SESSION_ID}', {JS_AUTH_FAVOURITES});
		//]]>
		</script>
		<!-- END switch_plus_menu -->
	</div>
</div>

<div class="quick-nav-topics">
    <!-- BEGIN switch_isconnect -->
	<a href="{U_VIEW_OLDER_TOPIC}">{L_VIEW_PREVIOUS_TOPIC}</a>
    <!-- END switch_isconnect -->
    <a href="#bottom">{L_GOTO_DOWN}</a>
    <!-- BEGIN switch_isconnect -->
	<a href="{U_VIEW_NEWER_TOPIC}">{L_VIEW_NEXT_TOPIC}</a>
    <!-- END switch_isconnect -->
</div>

{POLL_DISPLAY}

<!-- BEGIN postrow -->
	<!-- BEGIN hidden -->
		<div class="post {postrow.hidden.ROW_COUNT}">
			<p style="text-align:center">{postrow.hidden.MESSAGE}</p>
		</div>
	<!-- END hidden -->
	<!-- BEGIN displayed -->
		<div id="p{postrow.displayed.U_POST_ID}" class="post {postrow.displayed.ROW_COUNT}{postrow.displayed.ONLINE_IMG_NEW} post--{postrow.displayed.U_POST_ID}"{postrow.displayed.THANK_BGCOLOR} style="{postrow.displayed.DISPLAYABLE_STATE}">
            <div style="position: relative; top: -30px; width: 1px;" id="{postrow.displayed.U_POST_ID}"></div>
			<div class="postprofile" id="profile{postrow.displayed.U_POST_ID}">
				<!-- div class="online2"></div-->
				<dl>
					<dt>
						<div class="postprofile-avatar">
							{postrow.displayed.POSTER_AVATAR}
						</div>
						<div class="postprofile-name">
							{postrow.displayed.POSTER_NAME}
						</div>
						<div class="postprofile-rank">
							{postrow.displayed.POSTER_RANK_NEW}{postrow.displayed.RANK_IMAGE}
							<div {postrow.displayed.AWARDS_SHOW} class="dd_award {postrow.displayed.PROFILE_POSITION}">
                                {postrow.displayed.AWARDS}
							</div>
							<div class="award_more"></div>
						</div>
					</dt>
					<dd class="postprofile-info">
						<!-- BEGIN profile_field -->
							{postrow.displayed.profile_field.LABEL}
							{postrow.displayed.profile_field.CONTENT}
							{postrow.displayed.profile_field.SEPARATOR}
						<!-- END profile_field -->
						{postrow.displayed.POSTER_RPG}
					</dd>
					<dd class="postprofile-contact">
						{postrow.displayed.PROFILE_IMG}
						{postrow.displayed.PM_IMG}
						{postrow.displayed.EMAIL_IMG}
						<!-- BEGIN contact_field -->
						 	{postrow.displayed.contact_field.CONTENT}
						<!-- END contact_field -->
					</dd>
				</dl>
			</div>

			<div class="post-head">
				<div class="menu-wrap">
					<div class="post-menu">+</div>
					<ul class="profile-icons">
						<li class="btn-thank">
							<a href="{postrow.displayed.THANK_URL}">
								<i class="ion-heart"></i>
							</a>
						</li>
						<li class="btn-quote-multi">
							<span onclick="{postrow.displayed.MULTIQUOTE_URL}" id="post_mq{TOPIC_ID}_{postrow.displayed.U_POST_ID}">
								<i class="ion-quote"></i>
								<i class="ion-ios-plus-empty"></i>
							</span>
						</li>
						<li class="btn-quote">
							<a href="{postrow.displayed.QUOTE_URL}">
								<i class="ion-quote"></i>
							</a>
						</li>
						<li class="btn-edit">
							<a href="{postrow.displayed.EDIT_URL}">
								<i class="ion-edit"></i>
							</a>
						</li>
						<li class="btn-delete">
							<a href="{postrow.displayed.DELETE_URL}">
								<i class="ion-trash-a"></i>
							</a>
						</li>
						<li class="btn-ip">
							<a href="{postrow.displayed.IP_URL}">
								<i class="ion-ios-information"></i>
							</a>
						</li>
						<li class="btn-report">
							{postrow.displayed.REPORT_IMG}
						</li>
					</ul>
				</div>

				<h2 class="topic-title">{postrow.displayed.ICON} <a href="{postrow.displayed.POST_URL}">{postrow.displayed.POST_SUBJECT}</a></h2>
				<div class="topic-date">
					<span class="ico-assessment d-none" data-tooltip="This post has assessment comments.">
						<img src="https://i.servimg.com/u/f60/18/75/26/17/clipbo10.png" alt="This post has assessment comments." />
					</span>
					{postrow.displayed.POST_DATE_NEW}

					<!-- BEGIN switch_vote_active -->
					<div class="vote">
						<!-- BEGIN switch_vote -->
							<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_PLUS}" class="ion-plus-circled"></a>
						<!-- END switch_vote -->

						<!-- BEGIN switch_vote -->
							<a href="{postrow.displayed.switch_vote_active.switch_vote.U_VOTE_MINUS}" class="ion-minus-circled"></a>
						<!-- END switch_vote -->

						<!-- BEGIN switch_bar -->
						<div class="vote-bar" title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}">
							<div class="vote-bar-desc">
								{postrow.displayed.switch_vote_active.L_VOTE_TITLE}
							</div>

							<div class="vote-bars">
								<!-- BEGIN switch_vote_plus -->
									<div class="vote-bar-plus" style="width:{postrow.displayed.switch_vote_active.switch_bar.switch_vote_plus.HEIGHT_PLUS}px;"></div>
								<!-- END switch_vote_plus -->

								<!-- BEGIN switch_vote_minus -->
									<div class="vote-bar-minus" style="width:{postrow.displayed.switch_vote_active.switch_bar.switch_vote_minus.HEIGHT_MINUS}px;"></div>
								<!-- END switch_vote_minus -->
							</div>
						</div>
						<!-- END switch_bar -->

						<!-- BEGIN switch_no_bar -->
							<div title="{postrow.displayed.switch_vote_active.L_VOTE_TITLE}" class="vote-bar-empty"></div>
						<!-- END switch_no_bar -->
					</div>
					<!-- END switch_vote_active -->
				</div>
			</div>

			<div class="postbody">
				<div class="content">
					<div>{postrow.displayed.MESSAGE}</div>
					<!-- BEGIN switch_attachments -->
						<dl class="attachbox">
							<dt>{postrow.displayed.switch_attachments.L_ATTACHMENTS}</dt>
							<dd class="attachments">
								<!-- BEGIN switch_post_attachments -->
								<dl class="file">
									<dt>
										<img src="{postrow.displayed.switch_attachments.switch_post_attachments.U_IMG}" alt=""/>
									</dt>
									<dd>
										<!-- BEGIN switch_dl_att -->
										<span><a class="postlink" href="{postrow.displayed.switch_attachments.switch_post_attachments.switch_dl_att.U_ATTACHMENT}">{postrow.displayed.switch_attachments.switch_post_attachments.switch_dl_att.ATTACHMENT}</a> {postrow.displayed.switch_attachments.switch_post_attachments.switch_dl_att.ATTACHMENT_DEL}</span>
										<!-- END switch_dl_att -->

										<!-- BEGIN switch_no_dl_att -->
										<span>{postrow.displayed.switch_attachments.switch_post_attachments.switch_no_dl_att.ATTACHMENT} {postrow.displayed.switch_attachments.switch_post_attachments.switch_no_dl_att.ATTACHMENT_DEL}</span>
										<!-- END switch_no_dl_att -->

										<!-- BEGIN switch_no_comment -->
										<span>{postrow.displayed.switch_attachments.switch_post_attachments.switch_no_comment.ATTACHMENT_COMMENT}</span>
										<!-- END switch_no_comment -->

										<!-- BEGIN switch_no_dl_att -->
										<span><strong>{postrow.displayed.switch_attachments.switch_post_attachments.switch_no_dl_att.TEXT_NO_DL}</strong></span>
										<!-- END switch_no_dl_att -->

										<span>({postrow.displayed.switch_attachments.switch_post_attachments.FILE_SIZE}) {postrow.displayed.switch_attachments.switch_post_attachments.NB_DL}</span>
									</dd>
								</dl>
								<!-- END switch_post_attachments -->
							</dd>
						</dl>
					<!-- END switch_attachments -->
				</div>
				<div class="edited-message">
					{postrow.displayed.EDITED_MESSAGE}
				</div>
				<!-- BEGIN switch_signature -->
					<div class="signature_div" id="sig{postrow.displayed.U_POST_ID}">{postrow.displayed.SIGNATURE_NEW}</div>
				<!-- END switch_signature -->
			</div>
			<!-- BEGIN switch_likes_active -->
			<div class="fa_like_div">
				<button class="rep-button {postrow.displayed.switch_likes_active.C_VOTE_LIKE}"  data-href="{postrow.displayed.switch_likes_active.U_VOTE_LIKE}" data-href-rm="{postrow.displayed.switch_likes_active.U_VOTE_RM_LIKE}">
					<i class="ion-thumbsup"></i>
					<span>{postrow.displayed.switch_likes_active.L_LIKE}</span>{postrow.displayed.switch_likes_active.COUNT_VOTE_LIKE}
				</button>
				<!-- BEGIN switch_dislike_button -->
				<button class="rep-button {postrow.displayed.switch_likes_active.switch_dislike_button.C_VOTE_DISLIKE}" data-href="{postrow.displayed.switch_likes_active.switch_dislike_button.U_VOTE_DISLIKE}" data-href-rm="{postrow.displayed.switch_likes_active.switch_dislike_button.U_VOTE_RM_LIKE}">
					<i class="ion-thumbsdown"></i>
					<span>{postrow.displayed.switch_likes_active.switch_dislike_button.L_DISLIKE}</span>{postrow.displayed.switch_likes_active.switch_dislike_button.COUNT_VOTE_DISLIKE}
				</button>
				<!-- END switch_dislike_button -->
				<!-- BEGIN switch_like_list -->
				{postrow.displayed.switch_likes_active.switch_like_list.D_LIKE_LIST}
				<!-- END switch_like_list -->
				<!-- BEGIN switch_dislike_list -->
				{postrow.displayed.switch_likes_active.switch_dislike_list.D_DISLIKE_LIST}
				<!-- END switch_dislike_list -->
			</div>
			<!-- END switch_likes_active -->
		</div>
		<!-- BEGIN first_post_br -->
		<hr id="first-post-br" />
		<!-- END first_post_br -->
	<!-- END displayed -->
<!-- END postrow -->

<a name="bottomtitle"></a>

<div class="quick-nav-topics bottom">
    <!-- BEGIN switch_isconnect -->
	<a href="{U_VIEW_OLDER_TOPIC}">{L_VIEW_PREVIOUS_TOPIC}</a>
    <!-- END switch_isconnect -->
    <a href="#top">{L_BACK_TO_TOP}</a>
    <!-- BEGIN switch_isconnect -->
	<a href="{U_VIEW_NEWER_TOPIC}">{L_VIEW_NEXT_TOPIC}</a>
    <!-- END switch_isconnect -->
</div>

<div class="topic-actions bottom">
	<!-- BEGIN topicpagination -->
		<div class="pagination">
			{PAGINATION}
		</div>
	<!-- END topicpagination -->

	<div class="topic-actions-buttons">
		<!-- BEGIN switch_user_logged_in -->
			<!-- BEGIN watchtopic -->
				{S_WATCH_TOPIC}
			<!-- END watchtopic -->
		<!-- END switch_user_logged_in -->

		<!-- BEGIN switch_user_authpost -->
			<a href="{U_POST_NEW_TOPIC}" rel="nofollow" title="{T_POST_NEW_TOPIC}" {S_POST_NEW_TOPIC} class="ion-{I_POST_NEW_TOPIC} button1">{L_POST_NEW_TOPIC}</a>
		<!-- END switch_user_authpost -->
		<!-- BEGIN switch_user_authreply -->
			<a href="{U_POST_REPLY_TOPIC}" title="{T_POST_REPLY_TOPIC}" {S_POST_REPLY_TOPIC} class="ion-{I_POST_REPLY_TOPIC} button1">{L_POST_REPLY_TOPIC}</a>
		<!-- END switch_user_authreply -->
	</div>
</div>

<!-- BEGIN promot_trafic -->
	<div class="block" id="ptrafic_close" style="display: none;">
		<div class="h3"><a href="javascript:ShowHideLayer('ptrafic_open','ptrafic_close');"><i class="ion-ios-plus-outline"></i></a>{PROMOT_TRAFIC_TITLE}</div>
	</div>
	<div class="block" id="ptrafic_open" style="display:'';">
		<div class="h3"><a href="javascript:ShowHideLayer('ptrafic_open','ptrafic_close');"><i class="ion-ios-minus-outline"></i></a>{PROMOT_TRAFIC_TITLE}</div>
		<ul class="ptrafic">
			<!-- BEGIN link -->
				<li>
					<a href="{promot_trafic.link.U_HREF}" title="{promot_trafic.link.TITLE}">
						<i class="ion-ios-chatbubble-outline"></i>{promot_trafic.link.TITLE}
					</a>
				</li>
			<!-- END link -->
		</ul>
	</div>
<!-- END promot_trafic -->

<!-- BEGIN switch_forum_rules -->
<div class="post row1" id="forum_rules">
	<div class="h3">{L_FORUM_RULES}</div>
	<div class="clear"></div>
	<table class="postbody">
		<tr>
			<!-- BEGIN switch_forum_rule_image -->
			<td class="logo">
				<img src="{RULE_IMG_URL}" alt="" />
			</td>
			<!-- END switch_forum_rule_image -->
			<td class="rules content">
				{RULE_MSG}
			</td>
		</tr>
	</table>
</div>
<!-- END switch_forum_rules -->

<!-- BEGIN switch_user_logged_in -->
	<a name="quickreply"></a>
	{QUICK_REPLY_FORM}
<!-- END switch_user_logged_in -->

<form action="{S_JUMPBOX_ACTION}" method="get" onsubmit="if(document.jumpbox.f.value == -1){return false;}">
	<fieldset class="jumpbox">
		<label>{L_JUMP_TO}:</label>
		{S_JUMPBOX_SELECT}
		<input class="button2" type="submit" value="{L_GO}" />
	</fieldset>
</form>

<!-- BEGIN viewtopic_bottom -->
<form method="get" action="{S_FORM_MOD_ACTION}">
	<fieldset class="quickmod">
		<input type="hidden" name="t" value="{TOPIC_ID}" />

		<!-- <input type="hidden" name="sid" value="{S_SID}" /> -->
		<input type="hidden" name="{SECURE_ID_NAME}" value="{SECURE_ID_VALUE}" />
		<label>{L_MOD_TOOLS}:</label>
		{S_SELECT_MOD}
		<input class="button2" type="submit" value="{L_GO}" />
	</fieldset>
</form>

<p class="right">{S_TOPIC_ADMIN}</p>
<!-- END viewtopic_bottom -->

<!-- BEGIN show_permissions -->
	<div class="block">
		<div class="h3">{L_TABS_PERMISSIONS}</div>
		{S_AUTH_LIST}
	</div>
<!-- END show_permissions -->

<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
//<![CDATA[
$(resize_images({ 'selector' : '.postbody .content', 'max_width' : {switch_image_resize.IMG_RESIZE_WIDTH}, 'max_height' : {switch_image_resize.IMG_RESIZE_HEIGHT} }));
//]]>
</script>
<!-- END switch_image_resize -->

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/github-gist.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/languages/go.min.js"></script>
<script>
$(document).ready(function() {
	$('pre, code').each(function(i, block) {
		hljs.highlightBlock(block);
	});

	$('.post').each(function() {
		if($(this).find('.postprofile-avatar').html() !== undefined) {
			if (!$(this).find('.postprofile-avatar').html().length) {
				$(this).find('.postprofile-rank').css('border-bottom', 'none');
				$(this).find('.postprofile > dl > dt').css('min-height', $(this).find('.post-head').innerHeight());
			}
		}
	});

	let post_menus= document.getElementsByClassName('post-menu');
	Array.prototype.forEach.call(post_menus,function(post_menu) {
		post_menu.addEventListener('click', function (e) {
			if (e.target.classList.contains('expanded')){
				e.target.innerHTML='+';
				e.target.classList.remove('expanded');
			}else{
				let exp_menus = document.querySelectorAll('.post-menu.expanded');
				Array.prototype.forEach.call(exp_menus,function(exp_menu) {
					exp_menu.innerHTML='+';
					exp_menu.classList.remove('expanded');
				});
				e.target.innerHTML='-';
				e.target.classList.add('expanded');
			}
		});
	});

	document.onclick = function(e){
		if ($(e.target).parents('.menu-wrap').length==0) {
			let exp_menus = document.querySelectorAll('.post-menu.expanded');
			Array.prototype.forEach.call(exp_menus,function(exp_menu) {
				exp_menu.innerHTML='+';
				exp_menu.classList.remove('expanded');
			});
		}
	};
});
</script>