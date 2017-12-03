<table class="list">
    <tr>
        <th>id</th>
        <th>title</th>
        <th>uri</th>
        <th>stype</th>
        <th>操作</th>
    </tr>
    {% for key, row in rows %}
    <tr>
        <td>{{ row.id }}</td>
        <td>{{ row.title }}</td>
        <td>{{ row.uri }}</td>
        <td>{{ row.stype }}</td>
        <td>
            <a href="./view?id={{row.id}}">查看详情</a>
            <a href="./edit?id={{row.id}}">编辑</a>
        </td>
    </tr>
    {% endfor %}
</table>