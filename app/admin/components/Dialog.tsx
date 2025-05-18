import CardScroll from '@/app/admin/components/CardScroll';

import '@/app/styles/globals.css';
import '@/app/styles/dialog.css'


export default function Dialog({ref, dialogState, setDialogState, closeDialog}: {ref: any, dialogState: string, setDialogState: any, closeDialog: () => void}) {
    return (

        <dialog ref={ref}>
            {dialogState == 'categoryMenuDialog' && (
                <div className="dialog">
                    <button className="dialog__close" onClick={closeDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>

                    <div className="dialog__header">
                        <h1>category</h1>
                    </div>
                    
                    <div className="dialog__menu">
                        <button>Edit</button>
                        <button onClick={() => setDialogState('deleteCategoryDialog')}>Delete</button>
                    </div>
                </div>
            )}

            {dialogState == 'subcategoryMenuDialog' && (
                <div className="dialog">
                    <button className="dialog__close" onClick={closeDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>

                    <div className="dialog__header">
                        <h1>subcategory</h1>
                    </div>

                    <div className="dialog__menu">
                        <button>Edit</button>
                        <button onClick={() => setDialogState('deleteSubcategoryDialog')}>Delete</button>
                    </div>
                </div>
            )}

            {dialogState == 'addCategoryDialog' && (
                <form className="dialog">
                    <button className="dialog__close" onClick={closeDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                    <div className="dialog__header">
                        <h2>Add Category</h2>
                    </div>
                    <div className="dialog__content">
                        <div className="form__input">
                            <label htmlFor="">name</label>
                            <input type="text" />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">Description</label>
                            <input type="text" />
                        </div>
                    </div>
    
                    <div className="dialog__actions">
                        <button className="dialog__action" onClick={closeDialog}>cancel</button>
                        <button className="dialog__action">create</button>
                    </div>
                </form>
            )}

            {dialogState == 'addSubcategoryDialog' && (
                <form className="dialog">
                    <div className="dialog__header">
                        <h2>Add Subcategory</h2>
                    </div>
                    <div className="dialog__content">
                        <div className="form__input">
                            <label htmlFor="">name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="dialog__actions">
                        <button className="dialog__action">cancel</button>
                        <button className="dialog__action">create</button>
                    </div>
                </form>
            )}

            {dialogState == 'deleteImageDialog' && (
                <div className="dialog">
                    <div className="dialog__header">
                        <h2>Delete Image</h2>
                    </div>
    
                    <div className="dialog__content">
                        <h1>{'image goes here but shouldnt be h1'}</h1>
                    </div>
    
                    <div className="dialog__actions">
                        <button className="dialog__action" onClick={closeDialog}>cancel</button>
                        <button className="dialog__action">delete</button>
                    </div>
                </div>
            )}

            {dialogState == 'deleteCategoryDialog' && (
                <div className="dialog">
                    <div className="dialog__header">
                        <h2>Delete Category</h2>
                    </div>

                    <div className="dialog__content">
                        <p>This will also delete all of this</p>
                        <ul>
                            <li>Subcategory</li>
                            <li>Subcategory</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </div>

                    <div className="dialog__actions">
                        <button className="dialog__action" onClick={closeDialog}>cancel</button>
                        <button className="dialog__action">delete</button>
                    </div>
                </div>
            )}

            {dialogState == 'deleteSubcategoryDialog' && (
                <div className="dialog">
                    <div className="dialog__header">
                        <h2>Delete Subcategory</h2>
                    </div>

                    <div className="dialog__content">
                        <p>This will also delete all of this</p>
                        <CardScroll>
                        {'images go here'}
                        </CardScroll>
                    </div>

                    <div className="dialog__actions">
                        <button className="dialog__action" onClick={closeDialog}>cancel</button>
                        <button className="dialog__action">delete</button>
                    </div>
                </div>
            )}

        </dialog>
        
    )
}