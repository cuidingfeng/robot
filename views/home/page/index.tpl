{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/index/index.tpl"%}
     </div>
{% require "home:page/index.tpl" %}{% endblock %}