{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/sensor/view.tpl"%}
     </div>
{% endblock %}