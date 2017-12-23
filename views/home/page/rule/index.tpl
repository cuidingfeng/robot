{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/rule/index.tpl"%}
     </div>
{% require "home:page/rule/index.tpl" %}{% endblock %}