import * as React from 'react';
import EnhancedInput, { TextBlock, TitleDecorator } from 'react-enhanced-input';
import {
  isPrice,
  isSize,
  isinCodes,
  isinPartialRegEx,
  isinRegEx,
  tickerRegEx,
  tickers,
} from './data';

export function TitleDecorators() {
  const [text, setText] = React.useState<string>('');
  const [textBlocks, setTextBlocks] = React.useState<TextBlock[]>([]);

  React.useEffect(() => {
    handleChange(
      `XS1966819226 asdkljs ahjklas kjk IT000453454 al,dsklaj klasjd lk
    asdl sajkl; ABD l;kdl;k asd lasd;jk sa;k akjl kljkl jkj sad AT000B126958
    FAN ZEN YY`,
      0,
      true,
    );
  }, []);

  const handleChange = (
    newText: string,
    position: number,
    updateTokens?: boolean,
  ) => {
    const start =
      newText
        .trimEnd()
        .lastIndexOf(' ', newText[position] === ' ' ? position - 1 : position) +
      1;
    const tokens = newText.substring(start).split(/ |\n|\r|\t/);
    const tempBlocks = textBlocks.filter(
      (b) =>
        (!updateTokens && b.id !== 'bad-edit') ||
        (b.start + b.length < start && b.id !== 'bad-edit'),
    );
    const style = 'text-decoration-line: underline; margin-right: 2px;';
    let pos = start;
    tokens.forEach((token) => {
      if (token.match(isinRegEx)) {
        if (updateTokens) {
          if (isinCodes.includes(token.toUpperCase())) {
            tempBlocks.push({
              id: `isin${pos}`,
              start: pos,
              length: token.length,
              style,
              customProps: 'ISIN',
              Decorator: TitleDecorator,
              decoratorStyle: {
                backgroundColor: 'rgb(68, 68, 68)',
                color: 'white',
                fontFamily:
                  'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
              },
            });
          } else {
            tempBlocks.push({
              id: `isin${pos}`,
              start: pos,
              length: token.length,
              style,
              customProps: 'Invalid ISIN',
              Decorator: TitleDecorator,
              decoratorStyle: {
                backgroundColor: 'rgb(154, 61, 55)',
                color: 'white',
                fontFamily:
                  'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
              },
            });
          }
        }
      } else if (tickers.includes(token)) {
        if (updateTokens) {
          tempBlocks.push({
            id: `ticker${pos}`,
            start: pos,
            length: token.length,
            style,
            customProps: 'Ticker',
            Decorator: TitleDecorator,
            decoratorStyle: {
              backgroundColor: 'rgb(68, 68, 68)',
              color: 'white',
              fontFamily:
                'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
            },
          });
        }
      } else if (isSize(token)) {
        if (updateTokens) {
          tempBlocks.push({
            id: `vol${pos}`,
            start: pos,
            length: token.length,
            style,
            customProps: 'Size',
            Decorator: TitleDecorator,
            decoratorStyle: {
              backgroundColor: 'rgb(68, 68, 68)',
              color: 'white',
              fontFamily:
                'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
            },
          });
        }
      } else if (isPrice(token)) {
        if (updateTokens) {
          tempBlocks.push({
            id: `prc${pos}`,
            start: pos,
            length: token.length,
            style,
            customProps: 'Price',
            Decorator: TitleDecorator,
            decoratorStyle: {
              backgroundColor: 'rgb(68, 68, 68)',
              color: 'white',
              fontFamily:
                'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
            },
          });
        }
      } else if (
        position >= pos &&
        position <= pos + token.trimEnd().length &&
        token[position] !== ''
      ) {
        if (token.match(isinPartialRegEx)) {
          const matchedIsins = isinCodes.filter((code) => code.includes(token));
          if (matchedIsins.length > 0) {
            tempBlocks.push({
              id: 'bad-edit',
              start: pos,
              length: token.length,
              style: 'font-style: italic;font-weight: bold;',
              dropDown: {
                activation: 'cursorposition',
                options: matchedIsins.slice(0, 5),
              },
            });
          }
        } else if (token.match(tickerRegEx)) {
          const matchedTickers = tickers.filter((code) => code.includes(token));
          if (matchedTickers.length > 0) {
            tempBlocks.push({
              id: 'bad-edit',
              start: pos,
              length: token.length,
              style: 'font-style: italic;font-weight: bold;',
              dropDown: {
                activation: 'cursorposition',
                options: matchedTickers.slice(0, 5),
              },
            });
          }
        }
      }
      pos = pos + token.length + 1;
    });

    if (JSON.stringify(tempBlocks) !== JSON.stringify(textBlocks)) {
      setTextBlocks(tempBlocks);
    }
    if (updateTokens) {
      setText(newText);
    }
  };

  const handleOptionSelection = (blockId: string, option: string) => {
    const editBlock = textBlocks.find((b) => b.id === blockId);
    if (editBlock) {
      const newText =
        text.substring(0, editBlock.start) +
        option +
        text.substring(editBlock.start + editBlock.length);
      handleChange(newText, editBlock.start, true);
    }
  };

  const updatedBlocks = React.useMemo(
    () =>
      textBlocks.map((b) =>
        !b.customProps
          ? b
          : {
              ...b,
              customProps: { title: b.customProps, position: 'top' },
            },
      ),
    [textBlocks],
  );

  return (
    <div>
      <span>
        The below example demonstrates pill decorators (decorators that look
        like pills). The code for the TextBlock is shown below. A larger line
        height is recommended when deocrating text.
      </span>
      <pre>
        {`
TextBlock
{
  id: 'id',
  start: pos,
  length: token.length,
  style,
  customProps: 'Size',
  Decorator: TitleDecorator,
  decoratorStyle: {
    backgroundColor: 'rgb(68, 68, 68)',
    color: 'white',
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  }
}`}
      </pre>
      <div style={{ height: '300px', width: '600px', position: 'relative' }}>
        <EnhancedInput
          style={{
            fontFamily:
              'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
          }}
          text={text}
          textBlocks={updatedBlocks}
          onChange={(newText, position) =>
            handleChange(newText, position, true)
          }
          onCursorPositionChanged={(newText, position) =>
            handleChange(newText, position)
          }
          onDropDownItemSelected={(blockId, option) =>
            handleOptionSelection(blockId, option)
          }
        />
      </div>
    </div>
  );
}
