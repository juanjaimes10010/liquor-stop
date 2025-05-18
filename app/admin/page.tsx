'use client';

import { useRef, useState } from "react";

import categories from '@/app/data/data.json';
import Header from "@/app/admin/components/Header";
import Footer from '@/app/admin/components/Footer';
import Card from "@/app/admin/components/Card";
import CardScroll from "@/app/admin/components/CardScroll";
import Dialog from '@/app/admin/components/Dialog';

import '@/app/styles/globals.css';
import '@/app/styles/admin/style.css';

export default function Page() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [dialog, setDialog] = useState<string>('');

    const fileHandler = async (e: any) => {
        const file = e.target.files[0];
        if (!file) return;
    
        // Create object URL for preview
        const url = URL.createObjectURL(file);

    
        // Prepare data
        const image = {
            'image': file,
            'date': new Date().toISOString()
        }
            // Send to API
        const res = await fetch('/api/upload', {
            method: 'POST',
            body: JSON.stringify(image),
        });
  
        const data = await res.json();
        console.log('Uploaded:', data);

    }

    const openDialog = (type: string) => {
        if(dialogRef.current !== null) {
            setDialog(type)
            dialogRef.current.showModal()
        }
    }

    // const changeDialog = (type: string) => {
    //     if(dialogRef.current !== null) {
    //         setDialog(type)
    //     }
    // }

    const closeDialog = () => {
        if(dialogRef.current !== null) {
            dialogRef.current.close()
        }
    }

    const submit = (e:any) => {
        e.preventDefault();
    }


    return <>

    <Header/>

    <main>
        <div className="container" id="liquorStop">
        
        <button onClick={() => openDialog('addCategoryDialog')} id="addCategoryBtn">Add Category </button>
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
                                <div className="add__card">
                                    <button className="add__card">
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

        <Dialog  ref={dialogRef} dialogState={dialog} setDialogState={setDialog} closeDialog={closeDialog}/>
        </div>
    </main>

    <Footer />
</>
}