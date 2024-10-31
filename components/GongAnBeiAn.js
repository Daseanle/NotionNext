import { siteConfig } from '@/lib/config';
import LazyImage from './LazyImage';

/**
 * 公安备案号组件
 * @returns
 */
export const GongAnBeiAn = () => {
  // 设置备案号，默认值为 "皖公网安备34060002050051号"
  const BEI_AN_GONGAN = siteConfig('BEI_AN_GONGAN', '皖公网安备34060002050051号');

  // 从BEI_AN_GONGAN 字段中利用正则匹配提取出纯数字部分
  const codeMatch = BEI_AN_GONGAN.match(/\d+/); // 匹配纯数字
  const code = codeMatch ? codeMatch[0] : null; // 如果匹配成功则取出数字部分

  // 动态生成链接
  const href = `https://beian.mps.gov.cn/#/query/webSearch?code=${code}`;

  // 如果 BEI_AN_GONGAN 为空，则不渲染任何内容
  if (!BEI_AN_GONGAN) {
    return null;
  }

  return (
    <div className='flex flex-nowrap items-center gap-1'>
      <LazyImage src='/images/gongan.png' width={15} height={15} />
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {BEI_AN_GONGAN}
      </a>
    </div>
  );
};
