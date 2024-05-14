import React, { Fragment } from 'react'

import escapeHTML from 'escape-html';
import {
  IS_BOLD,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_UNDERLINE,
  IS_CODE,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
} from './RichTextNodeFormat';
import type { SerializedLexicalNode } from './RichTextNodeFormat';
import { RichBlock } from './RichBlocks';

interface Props {
  blocks: Record<string, React.FC<any>>
  nodes: SerializedLexicalNode[]
}


export function Serialize({ nodes, blocks }: Props): JSX.Element {
  return (
    <Fragment>
      {Array.isArray(nodes) &&
        nodes?.map((node, index): JSX.Element | null => {
          if (node.type === 'text') {
            let text = <Fragment key={index}>{escapeHTML(node.text)}</Fragment>
            if (node.format & IS_BOLD) {
              text = <strong key={index}>{text}</strong>
            }
            if (node.format & IS_ITALIC) {
              text = <em key={index}>{text}</em>
            }
            if (node.format & IS_STRIKETHROUGH) {
              text = (
                <span key={index} className="line-through">
                  {text}
                </span>
              )
            }
            if (node.format & IS_UNDERLINE) {
              text = (
                <span key={index} className="underline">
                  {text}
                </span>
              )
            }
            if (node.format & IS_CODE) {
              text = <code key={index}>{text}</code>
            }
            if (node.format & IS_SUBSCRIPT) {
              text = <sub key={index}>{text}</sub>
            }
            if (node.format & IS_SUPERSCRIPT) {
              text = <sup key={index}>{text}</sup>
            }

            return text
          }

          if (!node) {
            return null
          }

          // NOTE: Hacky fix for
          // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
          // which does not return checked: false (only true - i.e. there is no prop for false)
          const serializedChildrenFn = (
            node: SerializedLexicalNode
          ): JSX.Element | null => {
            if (node.children == null) {
              return null
            } else {
              if (node?.type === 'list' && node?.listType === 'check') {
                for (const item of node.children) {
                  if (!item?.checked) {
                    item.checked = false
                  }
                }
                return Serialize({ nodes: node.children, blocks})
              } else {
                return Serialize({ nodes: node.children, blocks })
              }
            }
          }

          const serializedChildren = serializedChildrenFn(node)

          switch (node.type) {
            case 'linebreak': {
              return <br key={index} />
            }
            case 'paragraph': {
              return <p key={index}>{serializedChildren}</p>
            }
            case 'heading': {
              type Heading = Extract<
                keyof JSX.IntrinsicElements,
                'h1' | 'h2' | 'h3' | 'h4' | 'h5'
              >
              const Tag = node?.tag as Heading
              return <Tag key={index}>{serializedChildren}</Tag>
            }
            case 'list': {
              type List = Extract<keyof JSX.IntrinsicElements, 'ul' | 'ol'>
              const Tag = node?.tag as List
              return (
                <Tag key={index} className={node?.listType}>
                  {serializedChildren}
                </Tag>
              )
            }
            case 'listitem': {
              if (node?.checked != null) {
                return (
                  <li
                    key={index}
                    className={`component--list-item-checkbox ${
                      node.checked
                        ? 'component--list-item-checkbox-checked'
                        : 'component--list-item-checked-unchecked'
                    }`}
                    value={node?.value}
                    role="checkbox"
                    aria-checked={node.checked ? 'true' : 'false'}
                    tabIndex={-1}
                  >
                    {serializedChildren}
                  </li>
                )
              } else {
                return (
                  <li key={index} value={node?.value}>
                    {serializedChildren}
                  </li>
                )
              }
            }
            case 'quote': {
              return <blockquote key={index}>{serializedChildren}</blockquote>
            }
            case 'block': {
              return <RichBlock blocks={blocks} key={index} fields={node?.fields}></RichBlock>
            }
            default:
              return null
          }
        })}
    </Fragment>
  )
}