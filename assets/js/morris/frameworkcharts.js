new Morris.Bar({
  element: 'frameworkchart',
  data: [
    {x: '1', y: 56991},
    {x: '2', y: 48305},
    {x: '3', y: 46843},
    {x: '4', y: 46344},
    {x: '5', y: 44813},
    {x: '6', y: 41513},
    {x: '7', y: 34661},
    {x: '8', y: 28247},
    {x: '9', y: 23033},
    {x: '10', y: 22982},
  ],

  xkey: 'x',
  ykeys: ['y'],
  labels: ['Кількість зірок на GitHub'],

}).on('click', function(i, row){
  console.log(i, row);
});

