google.charts.load('current', {packages:['wordtree']});
google.charts.setOnLoadCallback(drawSimpleNodeChart);

function drawSimpleNodeChart() {
        var nodeListData = new google.visualization.arrayToDataTable([
            ['id', 'childLabel', 'parent', 'size', { role: 'style' }],
            [0, 'КрНУ', -1, 5, 'black'],
            [1, 'ІЕЕСУ - Інститут електромеханіки, енергозбереження і систем управління', 0, 3, 'black'],
            [2, 'ІМіТ - Інститут механіки і транспорту', 0, 3, 'black'],
            [3, 'ФЕКІ - Факультет електроніки та комп’ютерної інженерії', 0, 3, 'black'],
            [4, 'ФЕУ - Факультет економіки і управління', 0, 3, 'black'],
            [5, 'Факультет природничих наук', 0, 3, 'black'],
            [6, 'Факультет права і гуманітарних наук', 0, 3, 'black'],

            [7, "141 Електроенергетика, електротехніка та електромеханіка (Електротехнічні системи електроспоживання (за видами))*", 1, 1, 'black'],
            [8, "141  Електроенергетика, електротехніка та електромеханіка (Енергетичний менеджмент)*", 1, 1, 'black'],
            [9, "141  Електроенергетика, електротехніка та електромеханіка (Електричні машини і апарати)*", 1, 1, 'black'],
            [10, "141 Електроенергетика, електротехніка та електромеханіка (Електромеханічні системи автоматизації та електропривод)*", 1, 1, 'black'],
            [11, "141 Електроенергетика, електротехніка та електромеханіка (Електромеханічне обладнання енергоємних виробництв)*", 1, 1, 'black'],
            [12, "151 Автоматизація та комп'ютерно-інтегровані технології (Комп'ютеризовані системи управління та автоматика)*", 1, 1, 'black'],

            [13, "131 Прикладна механіка (Технології машинобудування) *", 2, 1, 'black'],
            [14, "131 Прикладна механіка(Обладнання та технології пластичного формування конструкцій машинобудування) *", 2, 1, 'black'],
            [15, "131 Прикладна механіка (Металорізальні верстати та системи) *", 2, 1, 'black'],
            [16, "132 Матеріалознавство (Прикладне матеріалознавство) *", 2, 1, 'black'],
            [17, "133 Галузеве машинобудування (Колесні та гусеничні транспортні засоби) *", 2, 1, 'black'],
            [18, "133 Галузеве машинобудування (Підйомно-транспортні, дорожні, будівельні, меліоративні машини і обладнання)*", 2, 1, 'black'],
            [19, "133 Галузеве машинобудування (Металорізальні верстати та системи) *", 2, 1, 'black'],
            [20, "274 Автомобільний транспорт (Автомобілі та автомобільне господарство)* Спеціалізація: Технічна експлуатація автомобілів", 2, 1, 'black'],
            [21, "275 Транспортні технології (автомобільний транспорт) Організація перевезень і управління на транспорті (автомобільному) *", 2, 1, 'black'],


            [22, "014.09 Середня освіта (Інформатика)", 3, 1, 'black'],
            [23, "122 Комп'ютерні науки та інформаційні технології (Інформатика)*", 3, 1, 'black'],
            [24, "122 Комп'ютерні науки та інформаційні технології (Комп'ютерно-інтегровані технологічні процеси і виробництва)", 3, 1, 'black'],
            [25, "123 Комп'ютерна інженерія *", 3, 1, 'black'],
            [26, "151 Автоматизація та комп'ютерно-інтегровані технології (Інформаційні управляючі системи та технології)", 3, 1, 'black'],
            [27, "172 Телекомунікації та радіотехніка (Біотехнічні та медичні апарати і системи)*", 3, 1, 'black'],

            [28, "051 Економіка *", 4, 1, 'black'],
            [29, "071 Облік і оподаткування *", 4, 1, 'black'],
            [30, "072 Фінанси, банківська справа та страхування *", 4, 1, 'black'],
            [31, "Менеджмент (Менеджмент організацій і адміністрування) *", 4, 1, 'black'],
            [32, "073 Менеджмент (Менеджмент зовнішньоекономічної діяльності) *", 4, 1, 'black'],
            [33, "073 Менеджмент (Управління інноваційною діяльністю)", 4, 1, 'black'],
            [34, "074 Публічне управління та адміністрування *", 4, 1, 'black'],
            [35, "075 Маркетинг *", 4, 1, 'black'],
            [36, "076 Підприємництво, торгівля та біржова діяльність *", 4, 1, 'black'],
            [37, "242 Туризм", 4, 1, 'black'],

            [38, "101 Екологія *", 5, 1, 'black'],
            [39, "183 Технології захисту навколишнього середовища", 5, 1, 'black'],
            [40, "193 Геодезія та землеустрій *", 5, 1, 'black'],

            [41, "011 Науки про освіту (Педагогіка вищої школи)", 6, 1, 'black'],
            [42, "029 Інформаційна, бібліотечна та архівна справа", 6, 1, 'black'],
            [43, "035 Філологія (Переклад) *", 6, 1, 'black'],
            [44, "053 Психологія*", 6, 1, 'black'],
            [45, "061 Журналістика", 6, 1, 'black'],
            [46, "081 Право", 6, 1, 'black'],

            [47, "Інфо 1", 22, 1, 'black'],
            [48, "Інфо 2", 22, 1, 'black'],
            [49, "Інфо 3", 22, 1, 'black'],

            [50, "Інфо 1", 23, 1, 'black'],
            [51, "Інфо 2", 23, 1, 'black'],
            [52, "Інфо 3", 23, 1, 'black'],

            [53, "Інфо 1", 24, 1, 'black'],
            [54, "Інфо 2", 24, 1, 'black'],
            [55, "Інфо 3", 24, 1, 'black'],

            [56, "Інфо 1", 25, 1, 'black'],
            [57, "Інфо 2", 25, 1, 'black'],
            [58, "Інфо 3", 25, 1, 'black'],

        ]);

        var options = {
          colors: ['black', 'black', 'black'],
          wordtree: {
            format: 'explicit',
            type: 'suffix'
          }
        };

        var wordtree = new google.visualization.WordTree(document.getElementById('wordtree_explicit'));
        wordtree.draw(nodeListData, options);
      }