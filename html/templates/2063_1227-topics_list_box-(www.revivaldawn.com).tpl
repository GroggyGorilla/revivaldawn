<!-- BEGIN topics_list_box -->
<!-- BEGIN row -->
<!-- BEGIN header_table -->
	<!-- BEGIN multi_selection -->
		<script type="text/javascript">

		function check_uncheck_main_{topics_list_box.row.header_table.BOX_ID}()
		{
			alert('MAIN');

			var all_checked = true;

			for (i = 0; (i < document.{topics_list_box.FORMNAME}.elements.length) && all_checked; i++)
			{
				if (document.{topics_list_box.FORMNAME}.elements[i].name == '{topics_list_box.FIELDNAME}[]{topics_list_box.row.header_table.BOX_ID}')
				{
					all_checked = document.{topics_list_box.FORMNAME}.elements[i].checked;
				}
			}

			document.{topics_list_box.FORMNAME}.all_mark_{topics_list_box.row.header_table.BOX_ID}.checked = all_checked;
		}

		function check_uncheck_all_{topics_list_box.row.header_table.BOX_ID}()
		{
			alert('ALL');

			for (i = 0; i < document.{topics_list_box.FORMNAME}.length; i++)
			{
				if (document.{topics_list_box.FORMNAME}.elements[i].name == '{topics_list_box.FIELDNAME}[]{topics_list_box.row.header_table.BOX_ID}')
				{
					document.{topics_list_box.FORMNAME}.elements[i].checked = document.{topics_list_box.FORMNAME}.all_mark_{topics_list_box.row.header_table.BOX_ID}.checked;
				}
			}
		}

		</script>
	<!-- END multi_selection -->

	<div class="forumbg announcement">
		<ul class="topiclist topics">
			<li class="header">
				<dl class="icon">
					<dt>
						<!-- BEGIN multi_selection -->
						<input onclick="check_uncheck_all_{topics_list_box.row.header_table.BOX_ID}();" type="checkbox" name="all_mark_{topics_list_box.row.header_table.BOX_ID}" value="0" />
						<!-- END multi_selection -->
						{topics_list_box.row.L_TITLE}
					</dt>
					<dd class="lastpost"><i class="ion-android-time" data-tooltip="{topics_list_box.row.L_LASTPOST}"></i></dd>
				</dl>
			</li>
		</ul>
		<ul class="topiclist topics bg_none">
<!-- END header_table -->

<!-- BEGIN header_row -->
		<strong>{topics_list_box.row.L_TITLE}</strong>
<!-- END header_row -->

<!-- BEGIN topic -->

	<!-- BEGIN table_sticky -->
			</ul>
		</div>
		<div class="forumbg">
		<ul class="topiclist topics">
			<li class="header">
				<dl class="icon">
					<!--<dd class="dterm">-->
					<dd class="dterm">
						<!-- BEGIN multi_selection -->
						<input onclick="check_uncheck_all_{topics_list_box.row.header_table.BOX_ID}();" type="checkbox" name="all_mark_{topics_list_box.row.header_table.BOX_ID}" value="0" />
						<!-- END multi_selection -->
						{topics_list_box.row.topic.table_sticky.L_TITLE}
					</dd>
					<dd class="lastpost"><i class="ion-android-time" data-tooltip="{topics_list_box.row.topic.table_sticky.L_LASTPOST}"></i></dd>
				</dl>
			</li>
		</ul>
		<ul class="topiclist topics bg_none">
	<!-- END table_sticky -->

		<li class="row {topics_list_box.row.ROW_ALT_CLASS}"<!-- BEGIN line_sticky --> style="margin-top:5px;"<!-- END line_sticky --> >
			<dl class="icon row" style="background-image:url('{topics_list_box.row.TOPIC_FOLDER_IMG}');">
				<dd class="dterm col-md-8 my-auto" title="{topics_list_box.row.L_TOPIC_FOLDER_ALT}" {topics_list_box.row.ICON}>
					<!-- BEGIN single_selection -->
						<input type="radio" name="{topics_list_box.FIELDNAME}" value="{topics_list_box.row.FID}" {topics_list_box.row.L_SELECT} />
					<!-- END single_selection -->
					<div class="topic-title-container">
						{topics_list_box.row.NEWEST_POST_IMG}
						{topics_list_box.row.PARTICIPATE_POST_IMG}
						{topics_list_box.row.TOPIC_TYPE}
						<h2 class="topic-title hierarchy">
							<a class="topictitle" href="{topics_list_box.row.U_VIEW_TOPIC}">
								{topics_list_box.row.TOPIC_TITLE}
							</a>
						</h2>
					</div>
					<!-- BEGIN switch_description -->
						<span class="topic-description">
							{topics_list_box.row.topic.switch_description.TOPIC_DESCRIPTION}
						</span>
					<!-- END switch_description -->
					<span class="topic-author">
						&nbsp;{topics_list_box.row.L_BY}&nbsp;{topics_list_box.row.TOPIC_AUTHOR}
					</span>
					{topics_list_box.row.GOTO_PAGE_NEW}
					<!-- BEGIN nav_tree -->
						{topics_list_box.row.TOPIC_NAV_TREE_NEW}
					<!-- END nav_tree -->
                    <br /><br />
				</dd>
				<dd class="lastpost col-md-4 my-auto">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-9">
                                    <span>						
                                        {topics_list_box.row.LAST_POST_TIME}
                                        &nbsp;<dfn>{L_LASTPOST}</dfn> {topics_list_box.row.LAST_POST_IMG}
                                    </span>
                                </div>
                                <div class="col-md-3 ">
                                    <!-- BEGIN avatar -->
                                    <span class="lastpost-avatar">{topics_list_box.row.topic.avatar.LAST_POST_AVATAR}</span>
                                    <!-- END avatar -->
                                    <br />
                                    {topics_list_box.row.LAST_POST_AUTHOR}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <h4><span class="posts badge bg-dark">{topics_list_box.row.REPLIES} <dfn>{L_REPLIES}</dfn> <i class="ion-android-chat" data-tooltip="{L_REPLIES}"></i></span>&nbsp;&nbsp;
                    <span class="views badge bg-dark">{topics_list_box.row.VIEWS} <dfn>{L_VIEWS}</dfn> <i class="ion-eye" data-tooltip="{L_VIEWS}"></i></span></h4>
				</dd>
				<!-- BEGIN multi_selection -->
					<input onclick="javascript:check_uncheck_main_{topics_list_box.row.BOX_ID}();" type="checkbox" name="{topics_list_box.FIELDNAME}[]{topics_list_box.row.BOX_ID}" value="{topics_list_box.row.FID}" {topics_list_box.row.L_SELECT} />
				<!-- END multi_selection -->
			</dl>
		</li>
<!-- END topic -->
<!-- BEGIN no_topics -->
<li class="row row1">
	<dl>
		<dt><strong>{topics_list_box.row.L_NO_TOPICS}</strong></dt>
	</dl>
</li>
<!-- END no_topics -->

<!-- BEGIN bottom -->
</ul>
</div>
<!-- END bottom -->
<!-- BEGIN spacer --><br /><!-- END spacer -->
<!-- END row -->
<!-- END topics_list_box -->