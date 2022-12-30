import { IMainComponent } from "../main_component/interface/i_main_comp";





class Filter implements IMainComponent {
	
	

	render() {
		return `<h3>Category</h3>
		<div class="filter-list">
		<div class="checkbox-line">
		<input type="checkbox" id="${}">
		</div>
		</div>`;
	}

	addEvent() {
		
	  }
}

export { Filter };