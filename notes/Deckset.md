# Deckset

## Syntax

- `![inline50%]()` **Image**
        
			
### **Preamble**

- **Global Footer** - `footer: abc` 
- `slidenumbers: true` 
- `autoscale: true`
- `buildlists: true` for bulletpoints in sequence
- `[.background-color: FFFFFF]`

#### Columns
- `[.columns]` 
- `[.column] abc [.column]` for a particular column.
- `[.autoscale: true]` for individual slide effects
- `[.slidenumbers: false]` use this for title slide, rest global
	

#### Text

- `[.text: left]` for left align. Check this that it's not `[.text: #left]`. Similarly `center` and `right`. Also check whether it is `[.text: #alignment(left)]`
- `line-height(10)`
- `text-scale(2.0)`
- `Avenir text regular`
- `[.header: #, align, Avenir text bold]` for text in slide header