'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    MoreHorizontal,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Editor } from '@tiptap/react'

// Dynamically import the editor with SSR disabled
const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), {
    ssr: false,
})

export default function Component() {
    const [mounted, setMounted] = useState(false)
    const [content, setContent] = useState(`<h3>Today Offer: Get 5% bonus on 5000 deposit</h3>`)

    const editorRef = useRef<{ editor: Editor | null } | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleFormat = (action: string) => {
        const editor = editorRef.current?.editor
        if (!editor) return

        const chain = editor.chain().focus()

        switch (action) {
            case 'bold':
                chain.toggleBold().run()
                break
            case 'italic':
                chain.toggleItalic().run()
                break
            case 'bulletList':
                chain.toggleBulletList().run()
                break
            case 'orderedList':
                chain.toggleOrderedList().run()
                break
            default:
                break
        }
    }

    const handleHeadingChange = (value: string) => {
        const editor = editorRef.current?.editor
        if (!editor) return

        const chain = editor.chain().focus()
        switch (value) {
            case 'heading1':
                chain.toggleHeading({ level: 1 }).run()
                break
            case 'heading2':
                chain.toggleHeading({ level: 2 }).run()
                break
            case 'heading3':
                chain.toggleHeading({ level: 3 }).run()
                break
            default:
                chain.setParagraph().run()
        }
    }

    const handleSubmit = () => {
        console.log('Submitted content:', content)
    }

    if (!mounted) return null // Prevent SSR mismatch

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-lg shadow-sm border p-6">
                <h1 className="text-xl font-semibold text-gray-800 mb-6">Add Money</h1>

                <div className="space-y-4">
                    {/* Toolbar */}
                    <div className="flex items-center gap-2 p-3 border bg-gray-50 rounded-t-md">
                        <Select defaultValue="paragraph" onValueChange={handleHeadingChange}>
                            <SelectTrigger className="w-32 h-8 text-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="paragraph">Paragraph</SelectItem>
                                <SelectItem value="heading1">Heading 1</SelectItem>
                                <SelectItem value="heading2">Heading 2</SelectItem>
                                <SelectItem value="heading3">Heading 3</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="flex items-center gap-1">
                            <Button onClick={() => handleFormat('bold')} variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Bold className="h-4 w-4" />
                            </Button>
                            <Button onClick={() => handleFormat('italic')} variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Italic className="h-4 w-4" />
                            </Button>
                            <Button onClick={() => handleFormat('orderedList')} variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <ListOrdered className="h-4 w-4" />
                            </Button>
                            <Button onClick={() => handleFormat('bulletList')} variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <List className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Editor */}
                    <div className="border border-t-0 rounded-b-md bg-white p-4 min-h-[200px]">
                        <RichTextEditor ref={editorRef} content={content} onChange={setContent} />
                    </div>

                    <Button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}
