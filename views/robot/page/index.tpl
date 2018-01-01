{% extends 'robot:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "robot:widget/message/message.tpl"%}
     </div>
{% require "robot:page/index.tpl" %}{% endblock %}