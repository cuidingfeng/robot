{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/timespace/timespace.tpl"%}
     </div>
{% require "home:page/timespace.tpl" %}{% endblock %}