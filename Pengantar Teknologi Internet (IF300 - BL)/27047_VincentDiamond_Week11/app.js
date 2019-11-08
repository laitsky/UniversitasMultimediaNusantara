let view = (function() {
    let viewDependencies = [];
    let v = {
        clear: function(target) {
            $('.'+target).parent().empty();
        },
        applyData: function(target, data) {
            let targetDiv = $('.'+target);
            for(let property in data) {
                switch(data[property]['type']){
                    case 'innerHTML':
                        $(targetDiv).find('#'+property).html(data[property]['content']);
                        break;
                    case 'styleBackground':
                        let backgroundUrl = 'url('+data[property]['content']+')';
                        $(targetDiv).find('#'+property).css('background-image', backgroundUrl)
                        break;
                    case 'imageSrc':
                        $(targetDiv).find('#'+property).attr('src', data[property]['content']);
                }
            }
        },
        appendData: function(target, data, template) {
            let targetDiv = $('.'+target);
            let html = $.parseHTML(viewDependencies[template]);
            for(let property in data) {
                switch(data[property]['type']) {
                    case 'innerHTML':
                        $(html).find('#'+property).html(data[property]['content']);
                        break;
                    case 'imageSrc':
                        $(html).find('#'+property).attr('src', data[property]['content']);

                }
            }
            $(targetDiv).append(html);
        },
        appendArray: function(target, arr, template) {
            for(idx in arr) {
                v.appendData(target, arr[idx], template);
                if(template == 'singleSlider' && idx == 0) {
                    idx++;
                    $('.'+target).find('.'+template).addClass('active');
                }
            }
        },
        add: function(target) {
            viewDependencies[target] = $('.'+target).parent().html();
            v.clear(target);
        }
    }
    return v;
});

let factory = (function() {
    let dataDependencies = [];
    let f = {
        getData: function(url, callback, args) {
            $.get(url, function(data) {
                if(callback !== undefined)
                    if(args.length>1)
                        callback(args[0], data, args[1]);
                    else 
                        callback(args[0], data);
            })
        }
    }
    return f;
});

let app= (function(){
    console.log("ok");
    return {
        ready: function() {
            this.configure();
            this.factory.getData(
                'data/applicationHeader.json',
                this.view.applyData,
                ['applicationHeader']
            )
            this.factory.getData(
                'data/aboutUs.json',
                this.view.applyData,
                ['aboutUs']
            )
            this.factory.getData(
                'data/developers.json',
                this.view.appendArray,
                ['developers', 'singleDeveloper']
            )
            this.factory.getData(
                'data/ourPartners.json',
                this.view.appendArray,
                ['ourPartners', 'singlePartner']
            )
            this.factory.getData(
                'data/ourWorks.json',
                this.view.appendArray,
                ['ourWorks', 'singleSlider']
            )
        },
        configure: function() {
            this.view.add('singleSlider')
            this.view.add('singleDeveloper')
            this.view.add('singlePartner')
        },
        view: new view(),
        factory: new factory()
    }
})();