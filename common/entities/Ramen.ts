import { RamenProps } from '../redux/actions/types';

class Ramen {
   brand: string;
   variety: string;
   country: string;
   stars: number;
   topYear: number;
   topRank: number;
   initials: string;
   constructor(props: RamenProps){
      this.brand = props.Brand;
      this.variety = props.Variety;
      this.country = props.Country;
      this.stars = props.Stars;

      let brandSplit = this.brand.split(' ');
      this.initials = brandSplit[0][0];
      if(brandSplit.length > 1) {
         this.initials += brandSplit[1][0];
      }
      let topSplit = props["Top Ten"].split('#');
      if(topSplit.length === 2) {
         this.topRank = Number(topSplit[1]);
         this.topYear = Number(topSplit[0]);
      }
   }
}

export default Ramen;