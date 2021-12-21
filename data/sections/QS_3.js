const section = {
  id: 3,
  title: "Quick Sort Pivot Pseudocode",
  content:
  `<html>
    <body>
    <pre style="background-color: #eee; border: 1px solid #999; display: block">
        function partitionFunc(left, right, pivot)
          leftPointer = left
          rightPointer = right - 1
      
          while True do
            while A[++leftPointer] < pivot do
                //do-nothing            
            end while
          
            while rightPointer > 0 && A[--rightPointer] > pivot do
                //do-nothing         
            end while
          
            if leftPointer >= rightPointer
                break
            else                
                swap leftPointer,rightPointer
            end if
          
          end while 
        
          swap leftPointer,right
          return leftPointer
      
        end function
    </pre>
    </body>
  </html>`
};
export default section;
