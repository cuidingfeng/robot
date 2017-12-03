{% extends 'sensor:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "sensor:widget/message/message.tpl"%}
     </div>
{% require "sensor:page/index.tpl" %}{% endblock %}