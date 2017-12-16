<h1>给时空添加状态机</h1>
<p class="msg">用户在这里创建，给指定时空添加一个新的状态机</p>
<div class="fromone">
    <label>时空名称：</label>
    <a href="/home/space_time/view?id={{ space_time.id }}">{{ space_time.title }}</a>
</div>

<div class="fromone">
    <label>状态名称：</label>
    <input type="text" id="title" value="{{ status.title }}" class="input" />
</div>

<div class="fromone">
    <label>状态说明：</label>
    <textarea id="info" class="textarea">{{ status.info }}</textarea>
</div>

<div class="fromone">
    <label>状态标识：</label>
    <input type="text" id="name" value="{{ status.name }}" class="input" />
</div>

<div class="fromone">
    <label>状态值：</label>
    <input type="text" id="value" value="{{ status.value }}" class="input" />
</div>

<button id="create_btn" class="formBtn">确定</button>

<a href="?space_time_id={{ space_time.id }}">新增</a>

<h2>时空“{{ space_time.title }}”的所有状态机</h2>
<table class="list">
    <tr>
        <th>id</th>
        <th>名称</th>
        <th>标识</th>
        <th>操作</th>
    </tr>
{% for key, $status in statusList %}
<tr>
    <td>{{ $status.id }}</td>
    <td>{{ $status.title }}</td>
    <td>{{ $status.name }}</td>
    <td>
        <a href="?space_time_id={{space_time.id}}&status_id={{$status.id}}">查看</a>
        <a href="./del_status?status_id={{$status.id}}" confirm="true" ajax="true">删除</a>
    </td>
</tr>
{% endfor %} 
</table>

{% script %} require("home:widget/view_status/view_status.js")({{ space_time.id }}, {{ status.id }}); {% endscript %}