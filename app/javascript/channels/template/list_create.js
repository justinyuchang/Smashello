const list_create = `<div>
                                          <div class="list-group item">
                                          <div class="list-wrapper">
                                            <div class='list-content box'>
                                              <div data-role= "list-item" class="list-item" >
                                                <input data-role="list-id" type="hidden" val= "輸入">
                                                <span data-role="list-title" class="list-view"></span>
                                                <span class="list-men"><i class="fas fa-align-justify"></i></span>
                                              </div>
                                              
                                              <div data-role="card-wrapper" class="card-wrapper">
                                                <div data-role="card-group" class="card-group">
                                                <div data-role="sort-able hidden" class="sortable-hidden"></div>
                                                </div>

                                                <div data-role="card-input" class="card-create input">
                                                  <textarea name="card-text"></textarea>
                                                </div>

                                                <div data-role="card-btn" class="card-create btn">
                                                    <span data-role="card-create-btn" class="card-add"><i class="fas fa-plus"></i>新增卡片</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          </div>
                                        </div>` 

export default list_create;