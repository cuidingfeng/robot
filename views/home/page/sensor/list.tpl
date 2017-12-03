{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/sensor/list.tpl"%}
     </div>
{% require "home:page/sensor/list.tpl" %}{% endblock %}