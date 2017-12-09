
<h1>创建机器人</h1>
<p class="msg">机器人开发者在这里创建，把机器人添加到平台中</p>
<div class="fromone">
<label>机器人名称：</label>
<input type="text" id="title" class="input" />
</div>

<div class="fromone">
<label>机器人唯一标识：</label>
<input type="text" id="robotId" class="input" />
</div>

<div class="fromone">
<label>机器人介绍说明：</label>
<textarea id="info" class="textarea"></textarea>
</div>

<div class="fromone">
<label>机器人通信协议：</label>
<select class="select" id="stype">
<option value="local">平台内部</option>
<option value="http">http</option>
<option value="Scheme">Scheme</option>
<option value="server">操作系统通知</option>
</select>
</div>

<div class="fromone">
<label>通信URI：</label>
<input type="text" id="uri" class="input" />
</div>

<button id="create_btn" class="formBtn">创建</button>

<div class="fromone">
<label>密匙：</label>
secretKey=<span id="secretkey"></span>
</div>

<div class="fromone" id="meBtns">
<a href="./list" class="formBtn">所有机器人</a>
</div>

{% script %}
require("create");
{% endscript %}