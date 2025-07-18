'use client'

import { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'

interface Props {
    content: string
    onChange: (html: string) => void
}

const RichTextEditor = forwardRef(({ content, onChange }: Props, ref) => {
    const [editorReady, setEditorReady] = useState(false)

    const editor = useEditor({
        extensions: [StarterKit, Heading.configure({ levels: [1, 2, 3] })],
        content,
        editorProps: {
            attributes: {
                class: 'prose max-w-none outline-none focus:outline-none',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
        autofocus: true,
        editable: true,
        injectCSS: true,
        immediatelyRender: false, // IMPORTANT to avoid hydration issues
    })

    // only after client mount
    useEffect(() => {
        setEditorReady(true)
        if (editor) editor.commands.setContent(content)
    }, [])

    // expose editor instance to parent
    useImperativeHandle(ref, () => ({
        get editor() {
            return editor
        },
    }))

    if (!editor || !editorReady) return <p className="text-gray-400">Loading editor...</p>

    return <EditorContent editor={editor} />
})

export default RichTextEditor
