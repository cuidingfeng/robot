<table class="list">
    <tr>
        <th>id</th>
        <th>标题</th>
        <th>状态</th>
        <th>操作</th>
    </tr>
    {% for key, row in rows %}
    <tr>
        <td>{{ row.id }}</td>
        <td>{{ row.title }}</td>
        <td>{{ util.space_time_status(row.status) }}</td>
        <td>
            <a href="./view?id={{row.id}}">查看详情</a>
            <a href="./edit?id={{row.id}}">编辑</a>
        </td>
    </tr>
    {% endfor %}
</table>
