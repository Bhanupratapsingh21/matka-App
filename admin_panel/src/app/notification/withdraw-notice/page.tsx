'use client'

import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Editor } from '@tiptap/react'

import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import {
    Bold,
    Italic,
    List,
    ListOrdered,
    MoreHorizontal,
} from 'lucide-react'

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), {
    ssr: false,
})

export default function WithdrawMoneyPage() {
    const [content, setContent] = useState('')
    const editorRef = useRef<{ editor: Editor | null } | null>(null)

    const handleFormat = (action: string) => {
        const editor = editorRef.current?.editor
        if (!editor) return

        // const chain = editor.chain().focus()
        switch (action) {
            case 'bold':
                editor.chain().focus().toggleBold().run()
                break
            case 'italic':
                editor.chain().focus().toggleItalic().run()
                break
            case 'bulletList':
                editor.chain().focus().toggleBulletList().run()
                break
            case 'orderedList':
                editor.chain().focus().toggleOrderedList().run()
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
            case 'paragraph':
                chain.setParagraph().run()
                break
        }
    }

    const handleSubmit = () => {
        console.log('Submitted content:', content)
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-lg shadow-sm border p-6">
                <h1 className="text-xl font-semibold text-gray-800 mb-6">Withdraw Money</h1>

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
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Editor */}
                    <div className="border border-t-0 rounded-b-md bg-white p-4 min-h-[200px]">
                        <RichTextEditor ref={editorRef} content={content} onChange={setContent} />
                    </div>

                    {/* Submit Button */}
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
