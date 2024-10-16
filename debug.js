function abc(name,callback = function ()
{
  console.log('hello')
  callback();
})
abc("Prajjal",function()
{
  console.log('Custom function')
})