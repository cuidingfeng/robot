{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/robot/create.tpl"%}
     </div>
{% require "home:page/robot/create.tpl" %}{% endblock %}