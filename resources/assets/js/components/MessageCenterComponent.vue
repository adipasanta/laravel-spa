<template>
	<div id="message-form" class="container">

		<div class="field">
			<label v-text="dateStamp"></label>
		</div>

		<div class="field">
			<label class="label">Subject</label>
			<div class="control">
			<div class="select">
				<select>
					<option v-for="opt in opts" v-text="opt.text" v-bind:value="opt.val"></option>
				</select>
			</div>
			</div>
		</div>

		<div class="field">
			<label class="label">Message</label>
			<div class="control">
			<textarea class="textarea" placeholder="Textarea"></textarea>
			</div>
		</div>

		<div class="field is-grouped">
			<div class="control">
			<button class="button is-link">Send</button>
			</div>
		</div>
	</div>
<!--     <div class="main-section">
		<section class="wrap-content two-col">
			<div class="pri">
				<div class="content">
					<form id="form1" name="form1" class="styled-form" action="https://stanfordbosp.eresources.id/app/main/send.asp" method="post">
						<div class="form-row">
							<div class="question-text">
								<p v-text="dateStamp"></p>
								<p>Date: 11/5/2017 11:02:36 PM PST</p>
							</div>
						</div>
						<div id="row-subject" class="form-row">
							<div class="question-text">
								<label for="txtsubject">Subject <span class="required"> *</span></label>
							</div>
							<div class="question">
								<select id="subject" class="fotf_dropdown " data-toggle-type="" data-tab-index="4" data-pre-init="0" data-pre-label-value="Select Subject" data-required="1" name="subject" style="width: 300px; display: none;" aria-label="Subject">
									<option value="-1">Select Subject</option>
									<option value="9">"qc" 'test' Sub ~aw1 (student)</option>
									<option value="10">'qc' "tets" &lt;b&gt;sub&lt;/b&gt; ~ro1~ 'qc' "tets" &lt;b&gt;sub&lt;/b&gt; ~ro1~ 'qc' "tets" &lt;b&gt;sub&lt;/b&gt; ~ro1~ 'qc' "tets" &lt;b&gt;sub&lt;/b&gt; ~ro1~ 'qc' "tets" &lt;b&gt;sub&lt;/b&gt; ~</option>
									<option value="18">123</option>
									<option value="1">test</option>
									<option value="14">test (piph) and (piph)</option>
									<option value="13">test (vivan)</option>
									<option value="2">test1</option>
									<option value="3">test2</option>
									<option value="4">test6</option>
									<option value="5">test9</option>
								</select>
								<div class="input" style="width:">
									<div id="subjectdd" class="styled-select ">
										<div class="dropdown">
											<a class="dropdown-button" href="#"> 
											<img alt="dropdown-button" src="/i/bkgd-down-arrow@2x.png" width="12">
											</a>
											<input id="txtsubject" name="txtsubject" class="dropdown-input" autocomplete="off" data-l="false" data-v="-1" value="Select Subject" type="text">
											<input id="hd_selsubject" class="required" readonly="" name="hd_selsubject" value="-1" type="hidden">
											<input id="txtsubject_top" name="txtsubject_top" readonly="" value="0" type="hidden">
										</div>
										<ul id="subject_options" class="dropdown-options" data-toggle-type="" data-e="false" style="display: none;">
											<li id="subject_-1" v="-1" data-value="Select Subject" data-v="-1"><span data-value="Select Subject" data-v="-1">Select Subject</span></li>
											<li id="subject_9" v="9" data-value="&quot;qc&quot; 'test' Sub ~aw1 (student)" data-v="9"><span data-value="&quot;qc&quot; 'test' Sub ~aw1 (student)" data-v="9">"qc" 'test' Sub ~aw1 (student)</span></li>
											<li id="subject_10" v="10" data-value="'qc' &quot;tets&quot; <b>sub</b> ~ro1~ 'qc' &quot;tets&quot; <b>sub</b> ~ro1~ 'qc' &quot;tets&quot; <b>sub</b> ~ro1~ 'qc' &quot;tets&quot; <b>sub</b> ~ro1~ 'qc' &quot;tets&quot; <b>sub</b> ~" data-v="10"><span data-value="'qc' &quot;tets&quot; <b>sub</b> ~ro1~ 'qc' &quot;tets&quot; <b>sub</b> ~ro1~ 'qc' &quot;tets&quot; <b>sub</b> ~ro1~ 'qc' &quot;tets&quot; <b>sub</b> ~ro1~ 'qc' &quot;tets&quot; <b>sub</b> ~" data-v="10">'qc' "tets" &lt;b&gt;sub&lt;/b&gt; ~ro1~ 'qc' "tets" &lt;b&gt;sub&lt;/b&gt; ~ro1~ 'qc' "tets" &lt;b&gt;sub&lt;/b&gt; ~ro1~ 'qc' "tets" &lt;b&gt;sub&lt;/b&gt; ~ro1~ 'qc' "tets" &lt;b&gt;sub&lt;/b&gt; ~</span></li>
											<li id="subject_18" v="18" data-value="123" data-v="18"><span data-value="123" data-v="18">123</span></li>
											<li id="subject_1" v="1" data-value="test" data-v="1"><span data-value="test" data-v="1">test</span></li>
											<li id="subject_14" v="14" data-value="test (piph) and (piph)" data-v="14"><span data-value="test (piph) and (piph)" data-v="14">test (piph) and (piph)</span></li>
											<li id="subject_13" v="13" data-value="test (vivan)" data-v="13"><span data-value="test (vivan)" data-v="13">test (vivan)</span></li>
											<li id="subject_2" v="2" data-value="test1" data-v="2"><span data-value="test1" data-v="2">test1</span></li>
											<li id="subject_3" v="3" data-value="test2" data-v="3"><span data-value="test2" data-v="3">test2</span></li>
											<li id="subject_4" v="4" data-value="test6" data-v="4"><span data-value="test6" data-v="4">test6</span></li>
											<li id="subject_5" v="5" data-value="test9" data-v="5"><span data-value="test9" data-v="5">test9</span></li>
										</ul>
									</div>
								</div>
								<div class="validation">
									<p id="required-txtSubject" class="error required">Error: Please select your subject.</p>
									<p class="hint">Hint: This field is required.</p>
									<p class="affirm">This looks great!</p>
								</div>
							</div>
						</div>
						<div id="row-SubjectText" class="form-row" style="display: none;">
							<div class="question-text">
								<label for="SubjectText">Subject <span class="required"> *</span></label>
							</div>
							<div class="question">
								<div class="input">
									<input class="input-text" name="SubjectText" id="SubjectText" autocomplete="off" maxlength="255" value="" type="text">
								</div>
								<div class="validation">
									<p id="required-SubjectText" class="error required">This field is required.</p>
									<p class="hint">Please enter subject</p>
									<p class="affirm">This looks great!</p>
								</div>
							</div>
						</div>
						<div id="row-txtMessage" class="form-row">
							<div class="question-text">
								<label for="txtMessage">Message<span class="required"> *</span></label>
							</div>
							<div class="question">
								<div class="input">
									<textarea name="txtMessage" id="txtMessage" class="textarea" style="height: 300px;"></textarea>
								</div>
								<div class="validation">
									<p class="error required">Error: Please enter your message.</p>
									<p class="hint">Hint: This field is required.</p>
									<p class="affirm">This looks great!</p>
								</div>
							</div>
						</div>
						<div class="content">
							<p><br><span class="required">*</span> Required Fields</p>
						</div>
						<div class="content">
							<div id="error-message" class="errormsg" style="display:none">Please review the form for required fields or errors</div>
						</div>
						<div class="form-row">
							<div class="actions">
								<input name="msgID" value="0" readonly="" type="hidden">
								<input name="task" value="execute" readonly="" type="hidden">
								<div class="button featured"><a href="javascript:validateSendMessageForm();">Post</a></div>
								<div class="button negative"><a href="https://stanfordbosp.eresources.id/app/main/messages.asp">Back</a></div>
							</div>
						</div>
					</form>
				</div>
				<div class="content">
					<div class="button message"><a href="https://stanfordbosp.eresources.id/app/main/send.asp">Send Message</a></div>
				</div>
			</div>
			<div class="ter"></div>
		</section>

		<section class="wrap-view">
			<div class="list-title featured">
				<h2>INBOX</h2>
			</div>
			<div class="list-row">
				<div class="list-noitem">
					<p>Your inbox is empty</p>
				</div>
			</div>
			<br><br>
			<div class="list-title featured">
				<h2>OUTBOX</h2>
			</div>
			<div class="list-row">
				<div class="list-noitem">
					<p>Your outbox is empty</p>
				</div>
			</div>
		</section>
	</div> -->
</template>

<script>
	export default {
		data: function() {
			return {
				dateStamp: `Date ${window.Moment().tz('America/Los_Angeles').format('M/D/YYYY h:m:s A z')}`,
				opts: [
					{text: 'options-1', val: 1},
					{text: 'options-2', val: 2},
					{text: 'options-3', val: 3}
				]
			}
		},
		methods: {
			updateTime() {
				let self = this;
				this.dateStamp = `Date ${window.Moment().tz('America/Los_Angeles').format('M/D/YYYY h:m:s A z')}`;
				setInterval(self.updateTime, 1000);
			}
		},
		mounted() {
			this.updateTime();
		}
	}    
</script>