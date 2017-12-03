{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/sensor/create.tpl"%}
     </div>
{% endblock %}