//Remove <ul> from Releases
$('.toctree-l1 > a:contains("Releases")').siblings().remove();

//Check URL
var path = window.location.href;
var pathName = path.split('/');
var num = pathName.length - 3;

switch(pathName[num]) {
  case 'gettingstarted':
    $('.toctree-l1 > a:contains("Getting Started")').attr('state', 'open');
    break;
  case 'terms':
    $('.toctree-l1 > a:contains("Terms")').attr('state', 'open');
    break;
  case 'client':
    $('.toctree-l1 > a:contains("Client Reference")').attr('state', 'open');
    break;
  case 'server':
    $('.toctree-l1 > a:contains("Server Reference")').attr('state', 'open');
    break;
  case 'contributing':
    $('.toctree-l1 > a:contains("Contributing")').attr('state', 'open');
    break;
  case 'releases':
    //code this out when releases gets filled out
    break;
  default:
}
