import React from 'react'

export type Menu = {
    url: string;
    text: string;
}

export type Article = {
    content: React.ReactNode;
    categories: string[];
    description: string
    image: string;
    name: string;
    createdAt?: string
    updatedAt: string;
    author: {
        image: string;
        name: string;
    }
}