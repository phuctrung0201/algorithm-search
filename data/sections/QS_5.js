const section = {
  id: 5,
  title: "Quick Sort Pseudocode",
  content:
  `<html>
    <pre style="background-color: #eee; border: 1px solid #999; display: block">
        procedure quickSort(left, right)

        if right-left <= 0
          return
        else     
          pivot = A[right]
          partition = partitionFunc(left, right, pivot)
          quickSort(left,partition-1)
          quickSort(partition+1,right)    
        end if		

        end procedure
    </pre>
  </html>`
};
export default section;
