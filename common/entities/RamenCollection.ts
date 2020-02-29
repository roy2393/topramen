import Ramen from './Ramen';
import {RamenProps} from '../redux/actions/types';

class RamenCollection {
  ramens: Ramen[];
  addRamens(ramens: RamenProps[] = []) {
    if (!this.ramens) {
      this.ramens = [];
    }
    ramens.forEach(ramen => {
      this.ramens.push(new Ramen(ramen));
    });
  }

  sortList(ramens: Ramen[]) {
    return ramens.sort(function (a,b) {
      if (a.brand > b.brand) {
        return 1;
      }
      if (b.brand > a.brand) {
        return -1;
      }
      return 0;
    })
  }

  showList(searchText?: string, filters?: any) {
    if (!Array.isArray(this.ramens)) {
      return null;
    }
    let ramens = this.ramens;
    if (searchText) {
      ramens =  this.ramens.filter(ramen => {
        if (
          ramen.brand.indexOf(searchText) > -1 ||
          ramen.country.indexOf(searchText) > -1 ||
          ramen.variety.indexOf(searchText) > -1
        ) {
          return true;
        }
        return false;
      });
    }

    return this.sortList(ramens);
  }
}

export default RamenCollection;
