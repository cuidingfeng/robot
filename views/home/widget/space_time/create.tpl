
<h1>创建时空</h1>
<p class="msg">用户在这里创建，创建一个新的任务时空</p>
<div class="fromone">
<label>时空名称：</label>
<input type="text" id="title" class="input" />
</div>

<div class="fromone">
<label>时空说明：</label>
<textarea id="info" class="textarea"></textarea>
</div>

<button id="create_btn" class="formBtn">创建</button>

<div class="fromone" id="meBtns">
<a href="./list" class="formBtn">所有时空</a>
</div>

{% script %}
require("home:widget/space_time/create.js");
{% endscript %}