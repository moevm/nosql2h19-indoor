$('.part').click(
    function () {
        node = JSON.parse($(this).attr('description-date'));
        var id = node.id;
        var type = node.type;
        var floor = node.floor;
        var comment = node.comment;
        var company = node.company;
        $('.description').html(
            `<h1>Информация</h1>
                              <ul>
                                <li>Номер помещения:${id}</li>
                                <li>Тип помещения:${type}</li>
                                <li>Этаж:${floor}</li>
                                <li>Компания-владелец:${company}</li>
                                <li>Комментарий:${comment}</li>
                              </ul>`
        ).fadeIn();
    }
)
