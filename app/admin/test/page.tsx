'use client';

import { useRef, useState } from "react";
import Card from "../components/Card";
import CardScroll from "../components/CardScroll";

import categories from '@/app/data/data.json';

export default function Test({ children }: { children: React.ReactNode }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [dialog, setDialog] = useState<string>('');

    const openDialog = (type: string) => {
        if(dialogRef.current !== null) {
            setDialog(type)
            dialogRef.current.showModal()
        }
    }

    const changeDialog = (type: string) => {
        if(dialogRef.current !== null) {
            setDialog(type)
        }
    }

    const closeDialog = () => {
        if(dialogRef.current !== null) {
            dialogRef.current.close()
        }
    }

    const submit = (e:any) => {
        e.preventDefault();
    }

    return ( 
    <>
        <button onClick={() => openDialog('addCategoryDialog')}>Add Category</button>
        {categories.map( (category, i) => {
            return <section className="category" key={i}>
                  <div className="category__header">
                    <h1>{category.name}</h1>
                    {/* this button should open dialog */}
                    <button onClick={() => openDialog('categoryMenuDialog')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                        </svg>
                    </button>
                </div>      
                
                <div className="category__content">
                    {category.subcategories.map( (subctegory, i) => {
                        return <article className="subcategory" key={i}>
                            <div className="subcategory__header">
                                <h2>{subctegory.name}</h2>
                                {/* this button should open dialog */}
                                <button onClick={() => openDialog('subcategoryMenuDialog')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                    </svg>
                                </button>
                            </div>
                            <CardScroll>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}>
                                    <button style={{aspectRatio: '1', width: '50%'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                        </svg>
                                    </button>
                                </div>
                                {subctegory.images.map( (image, i) => {
                                    return <Card data={image} key={i} openDialog={openDialog}  /> 
                                })}
                            </CardScroll>
                        </article>
                    })}
                </div>

            </section>
        })}

{/*--------------------------------------*/}
            {/* dialog */}
{/*--------------------------------------*/}

        <dialog ref={dialogRef}>
            {dialog == 'categoryMenuDialog' && (
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
                        <button onClick={() => setDialog('deleteCategoryDialog')}>Delete</button>
                    </div>
                </div>
            )}

            {dialog == 'subcategoryMenuDialog' && (
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
                        <button onClick={() => setDialog('deleteSubcategoryDialog')}>Delete</button>
                    </div>
                </div>
            )}

            {dialog == 'addCategoryDialog' && (
                <form className="dialog" onSubmit={submit}>
                    <button className="dialog__close" onClick={closeDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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

            {dialog == 'deleteImageDialog' && (
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

            {dialog == 'deleteCategoryDialog' && (
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

            {dialog == 'deleteSubcategoryDialog' && (
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

        {/* <dialog id="categoryMenuDialog">
            <div className="dialog">
                <button className="dialog__close" onClick={closeDialog}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>

                <div className="dialog__header">
                    <h1>category</h1>
                </div>
                
                <div className="dialog__menu">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </dialog>

        <dialog id="subcategoryMenuDialog">
            <div className="dialog">
                <button className="dialog__close" onClick={closeDialog}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>

                <div className="dialog__header">
                    <h1>subcategory</h1>
                </div>

                <div className="dialog__menu">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </dialog> */}


        {/* <dialog id="addCategoryDialog">

            <form className="dialog">
                <button className="dialog__close" onClick={closeDialog}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
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
                    <button className="dialog__action">cancel</button>
                    <button className="dialog__action">create</button>
                </div>
            </form>
        </dialog> */}

        <dialog id="addSubcategoryDialog">
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
        </dialog>

        {/* <dialog id="deleteCategoryDialog">
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
                    <button className="dialog__action">cancel</button>
                    <button className="dialog__action">delete</button>
                </div>
            </div>
        </dialog> */}

        {/* <dialog id="deleteSubcategoryDialog">
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
                    <button className="dialog__action">cancel</button>
                    <button className="dialog__action">delete</button>
                </div>
            </div>
        </dialog> */}

        {/* <dialog id="deleteImageDialog">
            <div className="dialog">
                <div className="dialog__header">
                    <h2>Delete Image</h2>
                </div>

                <div className="dialog__content">
                    <h1>{'image goes here but shouldnt be h1'}</h1>
                </div>

                <div className="dialog__actions">
                    <button className="dialog__action">cancel</button>
                    <button className="dialog__action">delete</button>
                </div>
            </div>
        </dialog> */}


    </>
)}