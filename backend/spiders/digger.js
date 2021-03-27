/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
const format = require('string-format');

async function digger(url, options) {
  const data = await puppeteer
    .launch()
    .then(async (browser) => {
      const page = await browser.newPage();
      await page.goto(url);

      if (!options) {
        const r = await page.$$eval('pre', (pre) => pre[0].innerHTML);
        await browser.close();
        return r;
      }
      const { tags } = options;
      const tag_values = {};
      for (i = 0; i < tags.length; i++) {
        const { xpath } = tags[i];
        const { values } = tags[i];
        const vappend = 'append' in xpath.param ? xpath.param.append : undefined;
        const value_groups = [];
        tag_values[tags[i].name] = value_groups;

        let j_dec = 0;
        for (j = xpath.param.start; j < xpath.param.end; j++) {
          if (xpath.param.exclude && xpath.param.exclude.indexOf(j) >= 0) {
            j_dec++;
            // eslint-disable-next-line no-continue
            continue;
          }
          let x = '';

          if (xpath.param.type === 'group') {
            const group_index = j - xpath.param.start - j_dec;
            if (value_groups[group_index]) value_groups.push({});

            if (vappend) {
              for (ai = 0; ai < vappend.length; ai++) {
                x = format(xpath.path, vappend[ai].index, j);
                const aphandles = await page.$x(x);
                for (ei = 0; ei < aphandles.length; ei++) {
                  value_groups[group_index][vappend[ai].name] = await page.evaluate((ele) => ele.textContent, elehandles[ei]);
                }
              }
            }

            if (xpath.param.child) {
              const pChild = xpath.param.child;
              let k_dec = 0;
              for (k = pChild.start; k < pChild.end; k++) {
                if (pChild.exclude && pChild.exclude.indexOf(k) >= 0) {
                  k_dec++;
                  continue;
                }
                const value_index = k = pChild.start - k_dec;
                x = format(xpath.path, k, j);
                const elehandles = await page.$x(x);
                for (ei = 0; ei < elehandles.length; ei++) {
                  value_groups[group_index][values[value_index]] = await page.evaluate((ele) => ele.textContent, elehandles[ei]);
                }
              }
            } else {
              if (!value_groups[0]) value_groups.push({});
              const value_index = j - xpath.param.start - j_dec;
              x = format(xpath.path, j);
              const elehandles = await page.$x(x);
              for (ei = 0; ei < elehandles.length; ei++) {
                value_groups[0][values[value_index]] = await page.evaluate((ele) => ele.textContent, elehandles[ei]);
              }
            }
          } else {
            const value_index = j - xpath.param.start - j_dec;
            if (xpath.param.child) {
              const pChild = xpath.param.child;

              if (pChild.type === 'group') {
                let k_dec = 0;
                for (k = pChild.start; k < pChild.end; k++) {
                  if (pChild.exclude && pChild.exclude.indexOf(k) >= 0) {
                    k_dec++;
                    continue;
                  }
                  const group_index = k - pChild.start - k_dec;
                  if (!value_groups[group_index]) value_groups.push({});
                  if (vappend) {
                    for (ai = 0; ai < vappend.length; ai++) {
                      x = format(xpath.path, vappend[ai].index, k);
                      const aphandles = await page.$x(x);
                      for (ei = 0; ei < aphandles.length; ei++) {
                        value_groups[group_index][vappend[ai].name] = await page.evaluate((ele) => ele.textContent, aphandles[ei]);
                      }
                    }
                  }

                  x = format(xpath.path, j, k);
                  const elehandles = await page.$x(x);
                  for (ei = 0; ei < elehandles.length; ei++) {
                    value_groups[group_index][values[value_index]] = await page.evaluate((ele) => ele.textContent, elehandles[ei]);
                  }
                }
              } else {
                if (!value_groups[0]) value_groups.push({});
                x = format(xpath.path, j);
                const elehandles = await page.$x(x);
                for (ei = 0; ei < elehandles.length; ei++) {
                  value_groups[0][values[value_index]] = await page.evaluate((ele) => ele.textContent, elehandles[ei]);
                }
              }
            } else {
              if (!value_groups[0]) value_groups.push({});
              x = format(xpath.path, j);
              const elehandles = await page.$x(x);
              for (ei = 0; ei < elehandles.length; ei++) {
                value_groups[0][values[value_index]] = await page.evaluate((ele) => ele.textContent, elehandles[ei]);
              }
            }
          }
          if (JSON.stringify(value_groups[value_groups.length - 1]) == '{}') value_groups.pop();
        }
      }

      await browser.close();
      return tag_values;
    });
  return data;
}
exports.digger = digger;
