import "../modules/module";

class pageA {
  constructor () {
    console.log('this is page a.');
  }

  load () {
    console.log('this is pageA load');
  }
}

export {pageA};
