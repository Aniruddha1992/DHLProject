import { Component, OnInit } from '@angular/core';
interface groupByOption {
  key: string,
  value: string
}
@Component({
  selector: 'app-show-dashboards',
  templateUrl: './show-dashboards.component.html',
  styleUrls: ['./show-dashboards.component.scss']
})

export class ShowDashboardsComponent implements OnInit {
  cardData: any = [];
  cardDataToDisplay: any = {};
  displayDataKeys = [];
  groupByOptions: groupByOption[] = [];
  selectedGroupBy: groupByOption | undefined;
  displaySearchResultArr: any[] = [];
  stringifiedCardDataArray: any[] = [];
  isSearchBoxEmpty = true;
  errorMsg = "";
  searchStr = "";
  dummyData = [{
    id: 1,
    type: "Vegetable",
    name: "Carrot",
    colour: "Orange",
    price: "30/kg"
  },
  {
    id: 2,
    type: "Vegetable",
    name: "Broccoli",
    colour: "Green",
    price: "100/kg"
  },
  {
    id: 3,
    type: "Vegetable",
    name: "Eggplant",
    colour: "Violet",
    price: "40/kg"
  },
  {
    id: 4,
    type: "Fruit",
    name: "Mango",
    colour: "Yellow",
    price: "40/kg"
  },
  {
    id: 5,
    type: "Fruit",
    name: "Lichi",
    colour: "Red",
    price: "60/kg"
  }
  ]

  ngOnInit(): void {
    let du = [
      {
        key: "None",
        value: "None"
      },
      {
        key: "Fruits",
        value: "Fruit"
      },
      {
        key: "Vegetables",
        value: "Vegetable"
      }
    ];
    du.forEach(val => {
      this.groupByOptions.push({ key: val.key, value: val.value })
    })

    this.selectedGroupBy = this.groupByOptions[0];
    this.loadExistingData();
  }

  loadExistingData() {
    this.cardData = this.dummyData;
    this.resetDataCardView();
    this.dummyData.forEach(element => {
      let stringifyObj = JSON.stringify(element);
      this.stringifiedCardDataArray.push(stringifyObj.toLowerCase());
    });

  }

  onSearch(searchStr: any) {
    this.errorMsg = "";
    if (searchStr && searchStr.length >= 4) {
      searchStr = searchStr.toLowerCase();
      this.displaySearchResultArr = [];
      this.isSearchBoxEmpty = false;
      let newArrIndex = 0;
      for (let index = 0; index < this.stringifiedCardDataArray.length; index++) {
        if (this.stringifiedCardDataArray[index].match(searchStr)) {
          let matchedIndex = index;
          this.displaySearchResultArr[newArrIndex] = this.cardData[matchedIndex];
          newArrIndex = newArrIndex + 1;
        }
      }
    } else if (searchStr == "") {
      this.displaySearchResultArr = [];
      this.isSearchBoxEmpty = true;
    } else {
      this.errorMsg = "Minimum four characters needed"
    }
    this.resetDataCardView();
  }

  resetDataCardView() {
    if (this.selectedGroupBy?.value === 'None' && this.displaySearchResultArr.length == 0 && this.isSearchBoxEmpty) {
      this.cardDataToDisplay = this.cardData;
    }
    else if (this.selectedGroupBy?.value !== 'None' && this.displaySearchResultArr.length == 0 && this.isSearchBoxEmpty) {
      this.cardDataToDisplay = this.groupBy(this.cardData, this.selectedGroupBy?.value);
    } else if (this.selectedGroupBy?.value !== 'None' && this.displaySearchResultArr.length != 0 && !this.isSearchBoxEmpty) {
      this.cardDataToDisplay = this.groupBy(this.displaySearchResultArr, this.selectedGroupBy?.value);
    } else {
      this.cardDataToDisplay = this.displaySearchResultArr;
    }
  }

  groupBy(list: any, key: any) {
    let array = new Array();
    list.forEach((item: any) => {
      if (item.type === key) {
        array.push(item);
      }
    });
    return array;
  }

}
